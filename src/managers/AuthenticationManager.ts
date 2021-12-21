import { UserLogInCredentialsDTO } from "../models/DTO/user/UserLogInCredentialsDTO";
import AuthenticationService from "../services/AuthenticationService";
import UserTokenDTO from "../models/DTO/user/UserTokenDTO";

export default class AuthenticationManager {
  public static async login({
    username,
    password,
  }: UserLogInCredentialsDTO): Promise<UserTokenDTO> {
    return AuthenticationService.login({ username, password });
  }
}
