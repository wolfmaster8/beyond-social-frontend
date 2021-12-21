import { UserRegisterCredentialsDTO } from "../models/DTO/user/UserRegisterCredentialsDTO";
import UserService from "../services/UserService";

export default class UserManager {
  public static async register({
    username,
    password,
    firstName,
    lastName,
    email,
  }: UserRegisterCredentialsDTO): Promise<void> {
    return UserService.register({
      username,
      password,
      firstName,
      lastName,
      email,
    });
  }
}
