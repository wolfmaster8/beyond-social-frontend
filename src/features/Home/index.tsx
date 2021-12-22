import React, { useContext } from "react";
import Layout from "../../shared/components/Layout";
import HelmetContainer from "../../shared/components/HelmetContainer";
import { PostContext } from "../../shared/contexts/PostContext";
import DataDisplay from "../../shared/components/DataDisplay";

export default function Home() {
  const { posts } = useContext(PostContext);
  console.log({ posts });
  return (
    <Layout.AppLayout>
      <HelmetContainer pageTitle="Home" />
      {posts.map((post) => (
        <DataDisplay.Post key={post.id} post={post} />
      ))}
    </Layout.AppLayout>
  );
}
