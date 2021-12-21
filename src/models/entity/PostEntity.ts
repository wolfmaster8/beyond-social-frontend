import PostCommentEntity from "./PostCommentEntity";
import PostLikesEntity from "./PostLikeEntity";

interface PostEntity {
  id: number;
  userId?: number;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  comments?: PostCommentEntity[];
  likes?: PostLikesEntity[];
}

export default PostEntity;
