import UserEntity from "../../entity/UserEntity";

export interface UserRegisterCredentialsDTO
  extends Pick<
    UserEntity,
    "username" | "email" | "firstName" | "lastName" | "password"
  > {}
