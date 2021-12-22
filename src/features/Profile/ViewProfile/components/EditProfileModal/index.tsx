import React, { useContext } from "react";
import Feedback from "../../../../../shared/components/Feedback";
import { ViewProfileContext } from "../../ViewProfileContext";
import DataEntry from "../../../../../shared/components/DataEntry";
import Layout from "../../../../../shared/components/Layout";
import General from "../../../../../shared/components/General";

export default function EditProfileModal() {
  const {
    userProfile,
    closeUpdateModal,
    showUpdateModal,
    handleSetForm,
    handleSubmitForm,
    values,
  } = useContext(ViewProfileContext);
  return (
    <Feedback.Modal
      isOpen={showUpdateModal}
      closeModal={closeUpdateModal}
      title="Editar Perfil"
    >
      <form onSubmit={handleSubmitForm}>
        <Layout.Grid columns="1fr 1fr" gap="0.5rem" oneColumnOnMobile={false}>
          <DataEntry.Input
            name="firstName"
            onChange={handleSetForm}
            label="Nombre"
            value={values.firstName}
          />
          <DataEntry.Input
            name="lastName"
            onChange={handleSetForm}
            label="Apellido"
            value={values.lastName}
          />
        </Layout.Grid>
        <DataEntry.Input
          name="email"
          label="Email"
          onChange={handleSetForm}
          type="email"
          value={values.email}
        />
        <DataEntry.Input
          name="username"
          onChange={handleSetForm}
          label="Username"
          value={values.username}
        />
        <General.Button>Editar</General.Button>
      </form>
    </Feedback.Modal>
  );
}
