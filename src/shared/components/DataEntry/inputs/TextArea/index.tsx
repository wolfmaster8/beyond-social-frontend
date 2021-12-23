import React from "react";
import { TextAreaStyled } from "./styles";
import { InputContainer } from "../../styles";

type TextAreaProps = {
  label?: string;
};

const defaultProps = {
  label: undefined,
};

function TextArea({
  label,
  ...props
}: TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <InputContainer>
      {label ? (
        <label className="text-neutral-800 label-1" htmlFor={props.name}>
          {label}
        </label>
      ) : null}
      <TextAreaStyled id={props.name} {...props} />
    </InputContainer>
  );
}

TextArea.defaultProps = defaultProps;

export default TextArea;
