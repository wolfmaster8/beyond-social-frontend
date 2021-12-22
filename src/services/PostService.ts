import PostRegisterDTO from "../models/DTO/post/PostRegisterDTO";
import { apiService } from "./apiService";
import PostEntity from "../models/entity/PostEntity";
import { PostCommentRegisterDTO } from "../models/DTO/post/PostCommentRegisterDTO";
import { GenericIdParameter } from "../shared/utils/GlobalTypes";

export default class PostService {
  public static async create({ content }: PostRegisterDTO) {
    return apiService.post("/posts", { content });
  }

  public static async feed(): Promise<PostEntity[]> {
    const { data } = await apiService.get("/posts");
    return Promise.resolve(data);
  }

  public static async get({ id }: GenericIdParameter): Promise<PostEntity> {
    const { data } = await apiService.get(`/posts/${id}`);
    return Promise.resolve(data);
  }

  public static async like({ id }: GenericIdParameter): Promise<void> {
    await apiService.post(`/posts/${id}/like`);
    return Promise.resolve();
  }

  public static async comment({
    postId,
    content,
  }: PostCommentRegisterDTO): Promise<void> {
    await apiService.post(`/posts/${postId}/comment`, { content });
    return Promise.resolve();
  }
}
