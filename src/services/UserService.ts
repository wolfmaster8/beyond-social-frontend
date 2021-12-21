import { apiService } from "./apiService";
import { UserRegisterCredentialsDTO } from "../models/DTO/user/UserRegisterCredentialsDTO";

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
}
