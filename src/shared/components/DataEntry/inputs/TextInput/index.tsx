import React from "react";
import { InputContainer, TextInputStyled } from "./styles";

type TextInputProps = {
  label: string;
};

const defaultProps = {};

function TextInput({
  label,
  ...props
}: TextInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputContainer>
      <label className="text-neutral-800 label-1" htmlFor={props.name}>
        {label}
      </label>
      <TextInputStyled id={props.name} {...props} />
    </InputContainer>
  );
}

TextInput.defaultProps = defaultProps;

export default TextInput;
