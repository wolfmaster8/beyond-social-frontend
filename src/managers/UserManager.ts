import { UserRegisterCredentialsDTO } from "../models/DTO/user/UserRegisterCredentialsDTO";
import UserService from "../services/UserService";
import UserEntity from "../models/entity/UserEntity";
import { UserProfileWithPostsDTO } from "../models/DTO/user/UserProfileWithPostsDTO";
import { UserUpdateProfileDTO } from "../models/DTO/user/UserUpdateProfileDTO";

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

  public static async update({
    username,
    firstName,
    lastName,
    email,
  }: UserUpdateProfileDTO): Promise<void> {
    return UserService.update({ username, firstName, lastName, email });
  }
}
