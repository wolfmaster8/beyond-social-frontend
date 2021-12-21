import { useNavigate } from "react-router-dom";
import { UserLogInCredentialsDTO } from "../../models/DTO/user/UserLogInCredentialsDTO";
import useForm from "../../shared/hooks/useForm";
import AuthenticationManager from "../../managers/AuthenticationManager";
import SessionStorageKeysEnum from "../../shared/utils/enums/SessionStorageKeysEnum";
import { setRequestInterceptor } from "../../services/apiService";
import RoutesEnum from "../../routes/RoutesEnum";

export default function useLoginController() {
  const navigate = useNavigate();
  const doLogin = async () => {
    const { token } = await AuthenticationManager.login({
      username: values.username,
      password: values.password,
    });
    const bearerToken = `Bearer ${token}`;
    sessionStorage.setItem(SessionStorageKeysEnum.TOKEN, bearerToken);
    setRequestInterceptor();
    navigate(RoutesEnum.main);
  };

  const { values, handleSetForm, handleSubmitForm } =
    useForm<UserLogInCredentialsDTO>({
      onSubmit: doLogin,
      messages: {
        loading: "Iniciando Sesión",
        success: "¡Bienvenid@!",
      },
    });

  console.log(values);

  return { handleSetForm, handleSubmitForm };
}
