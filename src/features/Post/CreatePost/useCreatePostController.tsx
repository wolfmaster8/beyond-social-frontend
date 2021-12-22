import { useContext } from "react";
import useForm from "../../../shared/hooks/useForm";
import PostRegisterDTO from "../../../models/DTO/post/PostRegisterDTO";
import { PostContext } from "../../../shared/contexts/PostContext";
import PostManager from "../../../managers/PostManager";

export default function useCreatePostController() {
  const { closePostModal, getFeed } = useContext(PostContext);

  const onSubmit = async () => {
    await PostManager.create({ content: values.content });
    await getFeed();
    closePostModal();
  };

  const { values, handleSetForm, handleSubmitForm } = useForm<PostRegisterDTO>({
    onSubmit,
    messages: {
      success: "¡Publicado!",
      loading: "Publicando...",
    },
  });

  return { handleSetForm, handleSubmitForm, values };
}
