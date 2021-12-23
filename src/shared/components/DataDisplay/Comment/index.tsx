import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { CommentStyled } from "./styles";
import RoutesEnum from "../../../../routes/RoutesEnum";
import ProfileImage from "../ProfileImage";
import PostCommentEntity from "../../../../models/entity/PostCommentEntity";

type CommentProps = {
  comment: PostCommentEntity;
  loading?: boolean;
};

const defaultProps = {
  loading: true,
};

function Comment({ comment, loading }: CommentProps) {
  const isLoading = loading || !comment.id;
  return (
    <CommentStyled>
      <div className="comment-content">
        {isLoading ? (
          <Skeleton circle width={48} height={48} />
        ) : (
          <ProfileImage src={comment.user?.avatarUrl ?? ""} />
        )}

        <div className="comment-content-text">
          <p className="label-1 text-blue-800">
            {isLoading ? (
              <Skeleton width={80} height={12} />
            ) : (
              <>
                <span>
                  <b>{comment.user?.firstName}</b>
                </span>{" "}
                <Link to={`${RoutesEnum.user}/${comment.user?.username}`}>
                  <span className="text-neutral-500">
                    @{comment.user?.username}
                  </span>
                </Link>
              </>
            )}{" "}
          </p>
          {isLoading ? (
            <Skeleton count={1} width={350} />
          ) : (
            <p className="body-long-2">{comment.content}</p>
          )}
        </div>
      </div>
    </CommentStyled>
  );
}

Comment.defaultProps = defaultProps;

export default Comment;
