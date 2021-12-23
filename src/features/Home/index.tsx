import React, { useContext } from "react";
import { UilSorting } from "@iconscout/react-unicons";
import Layout from "../../shared/components/Layout";
import HelmetContainer from "../../shared/components/HelmetContainer";
import { PostContext } from "../../shared/contexts/PostContext";
import DataDisplay from "../../shared/components/DataDisplay";
import { NoMorePostsIndicator } from "./styles";
import PostEntity from "../../models/entity/PostEntity";

export default function Home() {
  const { posts, isLoading } = useContext(PostContext);

  const noMorePostsTitle =
    posts.length > 0 ? "Hasta aquí llegamos..." : "No hay nada por aquí...";

  const renderSkeletonPosts = (
    <>
      <DataDisplay.Post key={0} post={{} as PostEntity} loading />
      <DataDisplay.Post key={1} post={{} as PostEntity} loading />
      <DataDisplay.Post key={2} post={{} as PostEntity} loading />
      <DataDisplay.Post key={3} post={{} as PostEntity} loading />
    </>
  );
  return (
    <Layout.AppLayout>
      <HelmetContainer pageTitle="Home" />
      {isLoading ? (
        renderSkeletonPosts
      ) : (
        <div data-cy="feed">
          {posts.map((post) => (
            <DataDisplay.Post key={post.id} post={post} loading={false} />
          ))}
        </div>
      )}

      <NoMorePostsIndicator>
        <UilSorting />
        <p className="caption-1 text-blue-200">
          {noMorePostsTitle} <br /> Crea un post para que más personas lo vean
        </p>
      </NoMorePostsIndicator>
    </Layout.AppLayout>
  );
}
