import { apiService } from "./apiService";
import { UserLogInCredentialsDTO } from "../models/DTO/user/UserLogInCredentialsDTO";

export default class AuthenticationService {
  public static async login({ username, password }: UserLogInCredentialsDTO) {
    const { data } = await apiService.post("/auth/login", {
      username,
      password,
    });
    console.log(data);
  }
}
