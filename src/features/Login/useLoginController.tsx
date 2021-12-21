import { UserLogInCredentialsDTO } from "../../models/DTO/user/UserLogInCredentialsDTO";
import useForm from "../../shared/hooks/useForm";
import AuthenticationManager from "../../managers/AuthenticationManager";

export default function useLoginController() {
  const doLogin = async () => {
    await AuthenticationManager.login({
      username: values.username,
      password: values.password,
    });
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
