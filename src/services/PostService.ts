import PostRegisterDTO from "../models/DTO/post/PostRegisterDTO";
import { apiService } from "./apiService";
import PostEntity from "../models/entity/PostEntity";

export default class PostService {
  public static async create({ content }: PostRegisterDTO) {
    return apiService.post("/posts", { content });
  }

  public static async feed(): Promise<PostEntity[]> {
    const { data } = await apiService.get("/posts");
    return Promise.resolve(data);
  }
}
