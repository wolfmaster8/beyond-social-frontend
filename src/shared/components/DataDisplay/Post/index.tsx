import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { UilCommentAlt, UilHeart } from "@iconscout/react-unicons";
import PostEntity from "../../../../models/entity/PostEntity";
import { ActionsStyled, PostLinkStyled, PostStyled } from "./styles";
import RoutesEnum from "../../../../routes/RoutesEnum";
import ActionItem from "../ActionItem";
import { ColorType } from "../ActionItem/types";
import { PostContext } from "../../../contexts/PostContext";
import useUser from "../../../hooks/useUser";
import ProfileImage from "../ProfileImage";

type PostProps = {
  post: PostEntity;
  loading?: boolean;
};

const defaultProps = {
  loading: true,
};

function Post({ post, loading }: PostProps) {
  const { user } = useUser();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);
  const { likePost } = useContext(PostContext);

  const handleLikePost = () => {
    if (liked) {
      setLiked(false);
      setLikedCount(likedCount - 1);
    } else {
      setLiked(true);
      setLikedCount(likedCount + 1);
    }
    likePost({ id: post.id });
  };

  const handleUserLike = () => {
    const isLikedByLoggedUser = post.likes?.find(
      (like) => Number(like.userId) === Number(user.id)
    );
    if (isLikedByLoggedUser) {
      setLiked(true);
    }
  };

  useEffect(() => {
    setLikedCount(post.likes?.length ?? 0);
  }, [post.likes]);

  useEffect(() => {
    if (user.id) {
      handleUserLike();
    }
  }, [user.id, post.id]);

  const likeButtonColor: ColorType = liked ? "red" : "blue";

  const postUrl = `${RoutesEnum.post}/${post.id}`;

  const isLoading = loading || !post.id;
  return (
    <>
      <PostLinkStyled to={postUrl}>
        <PostStyled>
          <div className="post-content">
            {isLoading ? (
              <Skeleton circle width={48} height={48} />
            ) : (
              <ProfileImage src={post.user?.avatarUrl ?? ""} />
            )}

            <div className="post-content-text">
              <p className="label-1 text-blue-800">
                {isLoading ? (
                  <Skeleton width={80} />
                ) : (
                  <>
                    <span>
                      <b>{post.user?.firstName}</b>
                    </span>{" "}
                    <Link to={`${RoutesEnum.user}/${post.user?.username}`}>
                      <span className="text-neutral-500">
                        @{post.user?.username}
                      </span>
                    </Link>
                  </>
                )}{" "}
              </p>
              {isLoading ? (
                <Skeleton count={3} width={350} />
              ) : (
                <p className="body-long-2">{post.content}</p>
              )}
            </div>
          </div>
        </PostStyled>
      </PostLinkStyled>
      <ActionsStyled>
        {isLoading ? (
          <Skeleton circle width={24} height={24} />
        ) : (
          <ActionItem
            dataCy="likes"
            color={likeButtonColor}
            icon={<UilHeart />}
            count={likedCount}
            onClick={handleLikePost}
          />
        )}
        {isLoading ? (
          <Skeleton circle width={24} height={24} />
        ) : (
          <ActionItem
            dataCy="comments"
            icon={<UilCommentAlt />}
            count={post.comments?.length}
            onClick={() => navigate(postUrl)}
          />
        )}
      </ActionsStyled>
    </>
  );
}

Post.defaultProps = defaultProps;

export default Post;
