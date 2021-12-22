import React, { useContext } from "react";
import { UilCommentPlus, UilSignout } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { AsideStyled } from "./styles";
import BeyondSocialIcon from "../../../../../../assets/branding/beyond-social-icon.svg";
import RoutesEnum from "../../../../../../routes/RoutesEnum";
import General from "../../../../General";
import { PostContext } from "../../../../../contexts/PostContext";

export default function Aside() {
  const { openPostModal } = useContext(PostContext);
  return (
    <AsideStyled>
      <div className="sidebar-content">
        <Link to={RoutesEnum.main}>
          <img className="icon" src={BeyondSocialIcon} alt="" />
        </Link>
        <Link to={RoutesEnum.main}>
          <img
            className="profile-image"
            src="https://via.placeholder.com/200x200"
            alt=""
          />
        </Link>
        <General.IconButton onClick={openPostModal} icon={<UilCommentPlus />} />
        <General.IconButton disabled icon={<UilSignout />} />
      </div>
    </AsideStyled>
  );
}
