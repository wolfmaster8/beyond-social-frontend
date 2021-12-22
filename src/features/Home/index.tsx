import React, { useContext } from "react";
import Layout from "../../shared/components/Layout";
import HelmetContainer from "../../shared/components/HelmetContainer";
import { PostContext } from "../../shared/contexts/PostContext";

export default function Home() {
  const { posts } = useContext(PostContext);
  console.log({ posts });
  return (
    <Layout.AppLayout>
      <HelmetContainer pageTitle="Home" />
    </Layout.AppLayout>
  );
}
