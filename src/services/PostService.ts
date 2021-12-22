import PostRegisterDTO from "../models/DTO/post/PostRegisterDTO";
import { apiService } from "./apiService";

export default class PostService {
  public static async create({ content }: PostRegisterDTO) {
    return apiService.post("/posts", { content });
  }
}
