import React, { useContext } from "react";
import Feedback from "../../../../../shared/components/Feedback";
import { ViewProfileContext } from "../../ViewProfileContext";
import DataDisplay from "../../../../../shared/components/DataDisplay";
import General from "../../../../../shared/components/General";
import useUser from "../../../../../shared/hooks/useUser";
import Layout from "../../../../../shared/components/Layout";

export default function EditPhotoModal() {
  const { user } = useUser();
  const {
    closePhotoModal,
    showPhotoModal,
    handleImageUpload,
    handleImageSet,
    newImageUrl,
  } = useContext(ViewProfileContext);

  const imageToDisplay = newImageUrl.length
    ? newImageUrl
    : user.avatarUrl ?? "";

  return (
    <Feedback.Modal
      isOpen={showPhotoModal}
      closeModal={closePhotoModal}
      title="Cambiar Avatar"
    >
      <Layout.Flex justifyContent="center" flexDirection="column">
        <DataDisplay.ProfileImage size={120} src={imageToDisplay} />
        <input
          style={{ marginTop: "1rem", marginBottom: "2rem" }}
          type="file"
          name="avatar"
          accept=".jpg,.jpeg,.png"
          onChange={handleImageSet}
        />
        <General.Button
          disabled={!newImageUrl.length}
          onClick={handleImageUpload}
        >
          Subir Avatar
        </General.Button>
      </Layout.Flex>
    </Feedback.Modal>
  );
}
