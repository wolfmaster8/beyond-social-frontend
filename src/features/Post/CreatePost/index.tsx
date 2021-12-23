import React, { useContext } from "react";
import General from "../../../shared/components/General";
import useCreatePostController from "./useCreatePostController";
import { PostFormStyled } from "./styles";
import { PostContext } from "../../../shared/contexts/PostContext";
import Feedback from "../../../shared/components/Feedback";
import DataEntry from "../../../shared/components/DataEntry";
import DataDisplay from "../../../shared/components/DataDisplay";
import useUser from "../../../shared/hooks/useUser";

export default function CreatePost() {
  const { user } = useUser();
  const { handleSetForm, handleSubmitForm, values } = useCreatePostController();
  const { closePostModal, showModal } = useContext(PostContext);

  const isPublishButtonDisabled = !values.content;

  return (
    <Feedback.Modal isOpen={showModal} closeModal={closePostModal}>
      <PostFormStyled onSubmit={handleSubmitForm}>
        <div className="form-content">
          <DataDisplay.ProfileImage src={user.avatarUrl ?? ""} />
          <DataEntry.TextArea
            name="content"
            onChange={handleSetForm}
            placeholder="¿Qué piensas?"
          />
        </div>
        <div className="footer">
          <General.Button disabled={isPublishButtonDisabled}>
            Publicar
          </General.Button>
        </div>
      </PostFormStyled>
    </Feedback.Modal>
  );
}
