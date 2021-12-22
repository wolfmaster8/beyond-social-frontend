import { UserRegisterCredentialsDTO } from "../models/DTO/user/UserRegisterCredentialsDTO";
import UserService from "../services/UserService";
import UserEntity from "../models/entity/UserEntity";

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

  public static async getProfile(): Promise<UserEntity> {
    return UserService.getProfile();
  }
}
