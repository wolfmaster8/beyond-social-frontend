import { ReactNode } from "react";
import Post from "./Post";

const DataDisplay = ({ children }: { children: ReactNode }) => children;

DataDisplay.Post = Post;

export default DataDisplay;
