import PostCommentEntity from "./PostCommentEntity";
import PostLikeEntity from "./PostLikeEntity";
import UserEntity from "./UserEntity";

interface PostEntity {
  id: number;
  userId?: number;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  user?: Pick<UserEntity, "id" | "username" | "lastName" | "firstName">;
  comments?: PostCommentEntity[];
  likes?: PostLikeEntity[];
}

export default PostEntity;
