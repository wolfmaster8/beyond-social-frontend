import { useNavigate } from "react-router-dom";
import useForm from "../../shared/hooks/useForm";
import RoutesEnum from "../../routes/RoutesEnum";
import { UserRegisterCredentialsDTO } from "../../models/DTO/user/UserRegisterCredentialsDTO";
import UserManager from "../../managers/UserManager";

export default function useRegisterController() {
  const navigate = useNavigate();

  const doRegister = async () => {
    await UserManager.register({
      ...values,
    });
    navigate(RoutesEnum.login);
  };

  const { values, handleSetForm, handleSubmitForm } =
    useForm<UserRegisterCredentialsDTO>({
      onSubmit: doRegister,
      messages: {
        loading: "Creando tu cuenta",
        success: "¡Bienvenid@ a Beyond Social! Inicia Sesión para continuar",
      },
    });

  return { handleSetForm, handleSubmitForm };
}
