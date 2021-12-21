interface PostCommentEntity {
  id: number;
  userId: number;
  postId: number;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export default PostCommentEntity;
