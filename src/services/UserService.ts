import { apiService } from "./apiService";
import { UserRegisterCredentialsDTO } from "../models/DTO/user/UserRegisterCredentialsDTO";
import UserEntity from "../models/entity/UserEntity";
import { UserProfileWithPostsDTO } from "../models/DTO/user/UserProfileWithPostsDTO";
import { UserUpdateProfileDTO } from "../models/DTO/user/UserUpdateProfileDTO";

export default class UserService {
  public static async register({
    username,
    password,
    firstName,
    lastName,
    email,
  }: UserRegisterCredentialsDTO): Promise<void> {
    await apiService.post("/users", {
      username,
      password,
      firstName,
      lastName,
      email,
    });
    return Promise.resolve();
  }

  public static async getSelfProfile(): Promise<UserEntity> {
    const { data } = await apiService.get("/users/me");
    return Promise.resolve(data);
  }

  public static async getUserWithPosts({
    username,
  }: {
    username: string;
  }): Promise<UserProfileWithPostsDTO> {
    const { data } = await apiService.get(`/users/profile/${username}`);
    return Promise.resolve(data);
  }

  public static async update({
    username,
    firstName,
    lastName,
    email,
  }: UserUpdateProfileDTO): Promise<void> {
    await apiService.patch("/users", {
      username,
      firstName,
      lastName,
      email,
    });
    return Promise.resolve();
  }
}
