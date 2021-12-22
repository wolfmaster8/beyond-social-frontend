import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { UserProfileWithPostsDTO } from "../../../models/DTO/user/UserProfileWithPostsDTO";
import UserManager from "../../../managers/UserManager";
import RoutesEnum from "../../../routes/RoutesEnum";

export default function useViewProfileController() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({} as UserProfileWithPostsDTO);

  const getUserProfile = async () => {
    try {
      if (!username) throw Error();
      const profile = await UserManager.getUserWithPosts({ username });
      setUserProfile(profile);
      setIsLoading(false);
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message, { id: "profile" });
      } else {
        toast.error("No encontramos el perfil que buscabas", { id: "profile" });
      }
      navigate(RoutesEnum.main);
    }
  };

  useEffect(() => {
    if (username) {
      getUserProfile();
    }
  }, [username]);

  return { userProfile, isLoading };
}
