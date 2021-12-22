import { apiService } from "./apiService";
import { UserRegisterCredentialsDTO } from "../models/DTO/user/UserRegisterCredentialsDTO";
import UserEntity from "../models/entity/UserEntity";

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

  public static async getProfile(): Promise<UserEntity> {
    const { data } = await apiService.get("/users/profile");
    return Promise.resolve(data);
  }
}
