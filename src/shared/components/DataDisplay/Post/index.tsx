import React from "react";
import { Link } from "react-router-dom";
import { UilThumbsUp, UilCommentAlt } from "@iconscout/react-unicons";
import PostEntity from "../../../../models/entity/PostEntity";
import { ActionsStyled, PostLinkStyled, PostStyled } from "./styles";
import RoutesEnum from "../../../../routes/RoutesEnum";
import General from "../../General";
import ActionItem from "../ActionItem";

type PostProps = {
  post: PostEntity;
};

export default function Post({ post }: PostProps) {
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
          icon={<UilThumbsUp />}
          count={post.likes?.length}
          onClick={() => {}}
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
