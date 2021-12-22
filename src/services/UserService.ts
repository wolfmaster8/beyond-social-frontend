import { apiService } from "./apiService";
import { UserRegisterCredentialsDTO } from "../models/DTO/user/UserRegisterCredentialsDTO";
import UserEntity from "../models/entity/UserEntity";
import { GenericIdParameter } from "../shared/utils/GlobalTypes";
import { UserProfileWithPostsDTO } from "../models/DTO/user/UserProfileWithPostsDTO";

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
}
