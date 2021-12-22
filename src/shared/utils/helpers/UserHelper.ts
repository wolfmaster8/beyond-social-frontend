import md5 from "crypto-js/md5";
import { UserProfileWithPostsDTO } from "../../../models/DTO/user/UserProfileWithPostsDTO";
import UserEntity from "../../../models/entity/UserEntity";

export default class UserHelper {
  public static generateGravatarUri({ email }: { email: string }) {
    const hashDigest = md5(email);
    const gravatarURI = "https://www.gravatar.com/avatar";
    return `${gravatarURI}/${hashDigest}?d=retro`;
  }

  public static formatuserWithImages(
    user: UserProfileWithPostsDTO | UserEntity
  ): UserProfileWithPostsDTO | UserEntity {
    const avatarUrl =
      user.avatarUrl || this.generateGravatarUri({ email: user.email });
    return { ...user, avatarUrl };
  }
}
