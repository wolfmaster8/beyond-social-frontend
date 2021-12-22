import { ReactNode } from "react";
import Post from "./Post";
import ProfileImage from "./ProfileImage";
import Comment from "./Comment";

const DataDisplay = ({ children }: { children: ReactNode }) => children;

DataDisplay.Comment = Comment;
DataDisplay.Post = Post;
DataDisplay.ProfileImage = ProfileImage;

export default DataDisplay;
