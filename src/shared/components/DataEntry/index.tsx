import { ReactNode } from "react";
import TextInput from "./inputs/TextInput";
import TextArea from "./inputs/TextArea";

const DataEntry = ({ children }: { children: ReactNode }) => children;

DataEntry.Input = TextInput;
DataEntry.TextArea = TextArea;

export default DataEntry;
