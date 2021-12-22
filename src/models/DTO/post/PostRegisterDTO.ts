import PostEntity from "../../entity/PostEntity";

type PostRegisterDTO = Pick<PostEntity, "content">;

export default PostRegisterDTO;
