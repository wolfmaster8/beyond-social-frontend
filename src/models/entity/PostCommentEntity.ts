import UserEntity from "./UserEntity";

interface PostCommentEntity {
  id: number;
  userId: number;
  postId: number;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  user?: Pick<
    UserEntity,
    "id" | "username" | "lastName" | "firstName" | "avatarUrl"
  >;
}

export default PostCommentEntity;
