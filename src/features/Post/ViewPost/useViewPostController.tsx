import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import PostEntity from "../../../models/entity/PostEntity";
import PostManager from "../../../managers/PostManager";
import RoutesEnum from "../../../routes/RoutesEnum";
import useForm from "../../../shared/hooks/useForm";
import { PostCommentRegisterDTO } from "../../../models/DTO/post/PostCommentRegisterDTO";

export default function useViewPostController() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({} as PostEntity);

  useEffect(() => {
    handleGetPost();
  }, []);

  const handleGetPost = async () => {
    try {
      if (!id) throw Error();
      const fetchedPost = await PostManager.get({ id: Number(id) });
      setPost(fetchedPost);
      setIsLoading(false);
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message, { id: "post" });
      } else {
        toast.error("No encontramos el post que buscabas", { id: "post" });
      }
      navigate(RoutesEnum.main);
    }
  };

  const onSubmitComment = async () => {
    await PostManager.comment({ postId: Number(id), content: values.content });
    await handleGetPost();
    cleanFormValues();
  };

  const { values, handleSubmitForm, handleSetForm, cleanFormValues } =
    useForm<PostCommentRegisterDTO>({
      onSubmit: onSubmitComment,
      messages: {
        loading: "Publicando comentario",
        success: "¡Comentario Publicado! 🤩",
      },
    });

  return { post, isLoading, values, handleSubmitForm, handleSetForm };
}
