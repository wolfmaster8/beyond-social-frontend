import { toast } from "react-hot-toast";
import { apiService } from "./apiService";
import { UserLogInCredentialsDTO } from "../models/DTO/user/UserLogInCredentialsDTO";
import UserTokenDTO from "../models/DTO/user/UserTokenDTO";
import SessionStorageKeysEnum from "../shared/utils/enums/SessionStorageKeysEnum";
import RoutesEnum from "../routes/RoutesEnum";

export default class AuthenticationService {
  public static async login({
    username,
    password,
  }: UserLogInCredentialsDTO): Promise<UserTokenDTO> {
    const { data } = await apiService.post("/auth/login", {
      username,
      password,
    });
    return Promise.resolve(data);
  }

  public static isUserAuthenticated(): boolean {
    const hasSessionToken = sessionStorage.getItem(
      SessionStorageKeysEnum.TOKEN
    );

    return Boolean(hasSessionToken);
  }

  public static logout() {
    toast.success("Hasta Luego! 🤖");
    sessionStorage.removeItem(SessionStorageKeysEnum.TOKEN);
    window.location.assign(RoutesEnum.login);
  }
}
