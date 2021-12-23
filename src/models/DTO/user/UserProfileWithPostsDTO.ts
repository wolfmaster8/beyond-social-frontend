import UserEntity from "../../entity/UserEntity";
import PostEntity from "../../entity/PostEntity";

export interface UserProfileWithPostsDTO extends UserEntity {
  posts?: PostEntity[];
}
