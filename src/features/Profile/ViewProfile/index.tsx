import React from "react";
import Layout from "../../../shared/components/Layout";
import useViewProfileController from "./useViewProfileController";

export default function ViewProfile() {
  const { userProfile } = useViewProfileController();
  return (
    <Layout.AppLayout>
      <p>kjskj</p>
    </Layout.AppLayout>
  );
}
