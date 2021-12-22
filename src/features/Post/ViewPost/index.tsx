import React from "react";
import DataDisplay from "../../../shared/components/DataDisplay";
import useViewPostController from "./useViewPostController";
import Layout from "../../../shared/components/Layout";
import { CommentsForm } from "./styles";
import DataEntry from "../../../shared/components/DataEntry";
import General from "../../../shared/components/General";

export default function ViewPost() {
  const { post, isLoading, handleSubmitForm, values, handleSetForm } =
    useViewPostController();

  const isPublishButtonDisabled = !values.content;
  return (
    <Layout.AppLayout>
      <DataDisplay.Post post={post} loading={isLoading} />
      <CommentsForm onSubmit={handleSubmitForm}>
        <div className="comment-form">
          <DataDisplay.ProfileImage src="https://via.placeholder.com/200x200" />
          <DataEntry.TextArea
            value={values.content ?? ""}
            onChange={handleSetForm}
            name="content"
            placeholder="Responde a este post..."
            autoFocus
          />
        </div>
        <Layout.Flex justifyContent="flex-end">
          <General.Button disabled={isPublishButtonDisabled}>
            Comentar
          </General.Button>
        </Layout.Flex>
      </CommentsForm>
      {!post.comments?.length ? (
        <Layout.Flex justifyContent="center">
          <p className="text-blue-500 label-1 text-center">
            No hay comentarios. ¡Sé la primera persona en comentar!
          </p>
        </Layout.Flex>
      ) : null}
      {post.comments?.map((comment) => (
        <DataDisplay.Comment
          key={comment.id}
          comment={comment}
          loading={false}
        />
      ))}
    </Layout.AppLayout>
  );
}
