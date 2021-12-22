import { UserRegisterCredentialsDTO } from "../models/DTO/user/UserRegisterCredentialsDTO";
import UserService from "../services/UserService";
import UserEntity from "../models/entity/UserEntity";
import { GenericIdParameter } from "../shared/utils/GlobalTypes";
import { UserProfileWithPostsDTO } from "../models/DTO/user/UserProfileWithPostsDTO";

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

  public static async getSelfProfile(): Promise<UserEntity> {
    return UserService.getSelfProfile();
  }

  public static async getUserWithPosts({
    username,
  }: {
    username: string;
  }): Promise<UserProfileWithPostsDTO> {
    return UserService.getUserWithPosts({ username });
  }
}
