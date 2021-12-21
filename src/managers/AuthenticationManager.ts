import { UserLogInCredentialsDTO } from "../models/DTO/user/UserLogInCredentialsDTO";
import AuthenticationService from "../services/AuthenticationService";

export default class AuthenticationManager {
  public static async login({ username, password }: UserLogInCredentialsDTO) {
    return AuthenticationService.login({ username, password });
  }
}
