import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import Layout from "../../../shared/components/Layout";
import DataDisplay from "../../../shared/components/DataDisplay";
import { PostsCountStyled, ProfileStyled } from "./styles";
import General from "../../../shared/components/General";
import useUser from "../../../shared/hooks/useUser";
import {
  ViewProfileContext,
  ViewProfileContextProvider,
} from "./ViewProfileContext";
import EditProfileModal from "./components/EditProfileModal";
import HelmetContainer from "../../../shared/components/HelmetContainer";

function ViewProfile() {
  const { user } = useUser();
  const { userProfile, isLoading, openUpdateModal } =
    useContext(ViewProfileContext);
  const postsCount = userProfile.posts?.length;
  const isProfileFormLoggedUser = userProfile.id === user.id;
  const canUpdateProfile = isProfileFormLoggedUser && !isLoading;
  return (
    <Layout.AppLayout>
      <HelmetContainer pageTitle="Perfil" />
      <ProfileStyled>
        {isLoading ? (
          <Skeleton circle width={120} height={120} />
        ) : (
          <DataDisplay.ProfileImage
            size={120}
            src={userProfile.avatarUrl ?? ""}
          />
        )}
        <div className="profile-data">
          {isLoading ? (
            <Skeleton width={150} height={24} />
          ) : (
            <h1 className="heading-5 text-blue-600">
              {userProfile.firstName} {userProfile.lastName}
            </h1>
          )}
          {isLoading ? (
            <Skeleton width={80} />
          ) : (
            <p className="text-neutral-600 body-short-1">
              @{userProfile.username}
            </p>
          )}
        </div>
      </ProfileStyled>
      <PostsCountStyled>
        {isLoading ? (
          <Skeleton width={50} />
        ) : (
          <p className="label-1 text-neutral-600">
            <b className="text-blue-600">{postsCount}</b> Posts
          </p>
        )}
        {canUpdateProfile ? (
          <General.Button onClick={openUpdateModal} variant="secondary">
            Editar Perfil
          </General.Button>
        ) : null}
      </PostsCountStyled>
      {userProfile.posts?.map((post) => (
        <DataDisplay.Post key={post.id} post={post} loading={false} />
      ))}

      {canUpdateProfile ? <EditProfileModal /> : null}
    </Layout.AppLayout>
  );
}

const ViewProfileWrapper = () => (
  <ViewProfileContextProvider>
    <ViewProfile />
  </ViewProfileContextProvider>
);

export default ViewProfileWrapper;
