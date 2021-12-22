import PostRegisterDTO from "../models/DTO/post/PostRegisterDTO";
import PostService from "../services/PostService";
import PostEntity from "../models/entity/PostEntity";

export default class PostManager {
  public static async create({ content }: PostRegisterDTO) {
    return PostService.create({ content });
  }

  public static async feed(): Promise<PostEntity[]> {
    return PostService.feed();
  }
}
