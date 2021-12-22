import React, { useContext } from "react";
import { UilSorting } from "@iconscout/react-unicons";
import Layout from "../../shared/components/Layout";
import HelmetContainer from "../../shared/components/HelmetContainer";
import { PostContext } from "../../shared/contexts/PostContext";
import DataDisplay from "../../shared/components/DataDisplay";
import { NoMorePostsIndicator } from "./styles";

export default function Home() {
  const { posts } = useContext(PostContext);
  console.log({ posts });
  const noMorePostsTitle =
    posts.length > 0 ? "Hasta aquí llegamos..." : "No hay nada por aquí...";
  return (
    <Layout.AppLayout>
      <HelmetContainer pageTitle="Home" />
      {posts.map((post) => (
        <DataDisplay.Post key={post.id} post={post} />
      ))}
      <NoMorePostsIndicator>
        <UilSorting />
        <p className="caption-1 text-blue-200">
          {noMorePostsTitle} <br /> Crea un post para que más personas lo vean
        </p>
      </NoMorePostsIndicator>
    </Layout.AppLayout>
  );
}
