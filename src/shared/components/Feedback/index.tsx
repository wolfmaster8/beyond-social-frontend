import { ReactNode } from "react";
import Modal from "./Modal";

const Feedback = ({ children }: { children: ReactNode }) => children;

Feedback.Modal = Modal;

export default Feedback;
