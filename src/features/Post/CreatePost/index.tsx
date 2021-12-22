import React, { useContext } from "react";
import General from "../../../shared/components/General";
import useCreatePostController from "./useCreatePostController";
import { PostFormStyled } from "./styles";
import { PostContext } from "../../../shared/contexts/PostContext";
import Feedback from "../../../shared/components/Feedback";

export default function CreatePost() {
  const { handleSetForm, handleSubmitForm } = useCreatePostController();
  const { closePostModal, showModal } = useContext(PostContext);

  return (
    <Feedback.Modal isOpen={showModal} closeModal={closePostModal}>
      <PostFormStyled onSubmit={handleSubmitForm}>
        <div className="form-content">
          <img
            className="profile-image"
            src="https://via.placeholder.com/200x200"
            alt=""
          />
          <textarea
            name="content"
            id="content"
            onChange={handleSetForm}
            placeholder="Que piensas?"
          />
        </div>
        <div className="footer">
          <General.Button>Publicar</General.Button>
        </div>
      </PostFormStyled>
    </Feedback.Modal>
  );
}
