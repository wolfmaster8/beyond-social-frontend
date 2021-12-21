import UserEntity from "../../entity/UserEntity";

export interface UserLogInCredentialsDTO
  extends Pick<UserEntity, "username" | "password"> {}
