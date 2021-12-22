import PostRegisterDTO from "../models/DTO/post/PostRegisterDTO";
import PostService from "../services/PostService";

export default class PostManager {
  public static async create({ content }: PostRegisterDTO) {
    return PostService.create({ content });
  }
}
