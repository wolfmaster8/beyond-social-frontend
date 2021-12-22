import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import PostEntity from "../../../models/entity/PostEntity";
import PostManager from "../../../managers/PostManager";
import RoutesEnum from "../../../routes/RoutesEnum";

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

  return { post, isLoading };
}
