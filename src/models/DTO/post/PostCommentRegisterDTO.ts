import PostCommentEntity from "../../entity/PostCommentEntity";

export type PostCommentRegisterDTO = Pick<
  PostCommentEntity,
  "postId" | "content"
>;
