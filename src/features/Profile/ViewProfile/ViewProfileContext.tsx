import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { UserProfileWithPostsDTO } from "../../../models/DTO/user/UserProfileWithPostsDTO";
import UserManager from "../../../managers/UserManager";
import RoutesEnum from "../../../routes/RoutesEnum";
import useModal from "../../../shared/hooks/useModal";
import useForm from "../../../shared/hooks/useForm";
import { UserUpdateProfileDTO } from "../../../models/DTO/user/UserUpdateProfileDTO";
import { UserContext } from "../../../shared/contexts/UserContext";

type ViewProfileContextType = {
  userProfile: UserProfileWithPostsDTO;
  isLoading: boolean;
  openUpdateModal: () => void;
  closeUpdateModal: () => void;
  handleSubmitForm: (e: React.FormEvent) => void;
  showUpdateModal: boolean;
  handleSetForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  values: UserUpdateProfileDTO;
};

export const ViewProfileContext = createContext({} as ViewProfileContextType);

type ViewProfileContextProps = {
  children: ReactNode;
};

export function ViewProfileContextProvider({
  children,
}: ViewProfileContextProps) {
  const navigate = useNavigate();
  const { username } = useParams();

  const { getUserProfile } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({} as UserProfileWithPostsDTO);

  const { closeModal, openModal, showModal } = useModal();

  const getProfile = async () => {
    try {
      if (!username) throw Error();
      const profile = await UserManager.getUserWithPosts({ username });
      setUserProfile(profile);
      updateFormValues({ values: profile });
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

  const handleUpdateProfile = async () => {
    const valueToSave = removeNonChangedValues();
    await UserManager.update(valueToSave);
    await getProfile();
    await getUserProfile();
    closeModal();
  };

  const removeNonChangedValues = (): UserUpdateProfileDTO => {
    const valuesToSave = { ...values } as UserUpdateProfileDTO;
    Object.entries(values).forEach(([key, value]) => {
      const hasChanged =
        value !== userProfile[key as keyof UserUpdateProfileDTO];
      if (!hasChanged) delete valuesToSave[key as keyof UserUpdateProfileDTO];
      return hasChanged;
    });
    return valuesToSave;
  };

  const { handleSetForm, values, handleSubmitForm, updateFormValues } =
    useForm<UserUpdateProfileDTO>({
      onSubmit: handleUpdateProfile,
      messages: {
        loading: "Actualizando...",
        success: "¡Perfil Actualizado!",
      },
    });

  useEffect(() => {
    if (username) {
      getProfile();
    }
  }, [username]);

  return (
    <ViewProfileContext.Provider
      value={{
        userProfile,
        isLoading,
        openUpdateModal: openModal,
        closeUpdateModal: closeModal,
        showUpdateModal: showModal,
        handleSetForm,
        values,
        handleSubmitForm,
      }}
    >
      {children}
    </ViewProfileContext.Provider>
  );
}
