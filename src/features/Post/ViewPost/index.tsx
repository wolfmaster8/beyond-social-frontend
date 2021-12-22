import React from "react";
import DataDisplay from "../../../shared/components/DataDisplay";
import useViewPostController from "./useViewPostController";
import Layout from "../../../shared/components/Layout";

export default function ViewPost() {
  const { post, isLoading } = useViewPostController();
  return (
    <Layout.AppLayout>
      <DataDisplay.Post post={post} loading={isLoading} />
      <p>jp;a</p>
    </Layout.AppLayout>
  );
}
