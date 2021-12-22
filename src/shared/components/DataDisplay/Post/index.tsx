import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UilCommentAlt, UilHeart } from "@iconscout/react-unicons";
import PostEntity from "../../../../models/entity/PostEntity";
import { ActionsStyled, PostLinkStyled, PostStyled } from "./styles";
import RoutesEnum from "../../../../routes/RoutesEnum";
import ActionItem from "../ActionItem";
import { ColorType } from "../ActionItem/types";
import { PostContext } from "../../../contexts/PostContext";

type PostProps = {
  post: PostEntity;
};

export default function Post({ post }: PostProps) {
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

  useEffect(() => {
    setLikedCount(post.likes?.length ?? 0);
  }, []);

  const isLikedByLoggedUser: boolean = post.user?.id === 1;

  const likeButtonColor: ColorType = liked ? "red" : "blue";
  return (
    <>
      <PostLinkStyled to={`${RoutesEnum.post}/${post.id}`}>
        <PostStyled>
          <div className="post-content">
            <img
              className="profile-image"
              src="https://via.placeholder.com/200x200"
              alt=""
            />
            <div className="post-content-text">
              <p className="label-1 text-blue-800">
                <span>
                  <b>{post.user?.firstName}</b>
                </span>{" "}
                <Link to={`${RoutesEnum.user}/${post.user?.username}`}>
                  <span className="text-neutral-500">
                    @{post.user?.username}
                  </span>
                </Link>
              </p>
              <p className="body-long-2">{post.content}</p>
            </div>
          </div>
        </PostStyled>
      </PostLinkStyled>
      <ActionsStyled>
        <ActionItem
          color={likeButtonColor}
          icon={<UilHeart />}
          count={likedCount}
          onClick={handleLikePost}
        />
        <ActionItem
          icon={<UilCommentAlt />}
          count={post.comments?.length}
          onClick={() => {}}
        />
      </ActionsStyled>
    </>
  );
}
