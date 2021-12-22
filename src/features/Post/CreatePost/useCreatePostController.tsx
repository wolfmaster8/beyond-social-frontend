import { useContext, useEffect } from "react";
import useForm from "../../../shared/hooks/useForm";
import PostRegisterDTO from "../../../models/DTO/post/PostRegisterDTO";
import { PostContext } from "../../../shared/contexts/PostContext";

export default function useCreatePostController() {
  const { closePostModal, showModal } = useContext(PostContext);
  const onSubmit = () => {
    closePostModal();
  };

  const { handleSetForm, handleSubmitForm } = useForm<PostRegisterDTO>({
    onSubmit,
    messages: {
      success: "Publicado!",
      loading: "Publicando...",
    },
  });

  return { handleSetForm, handleSubmitForm };
}
