import PostRegisterDTO from "../models/DTO/post/PostRegisterDTO";
import PostService from "../services/PostService";
import PostEntity from "../models/entity/PostEntity";
import { PostCommentRegisterDTO } from "../models/DTO/post/PostCommentRegisterDTO";
import { GenericIdParameter } from "../shared/utils/GlobalTypes";

export default class PostManager {
  public static async create({ content }: PostRegisterDTO) {
    return PostService.create({ content });
  }

  public static async feed(): Promise<PostEntity[]> {
    return PostService.feed();
  }

  public static async like({ id }: GenericIdParameter): Promise<void> {
    return PostService.like({ id });
  }

  public static async comment({
    postId,
    content,
  }: PostCommentRegisterDTO): Promise<void> {
    return PostService.comment({ postId, content });
  }
}
