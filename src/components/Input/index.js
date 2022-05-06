import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// @import styles
import { InputContainer, InputVaild } from "./input.styled";

const Input = (props) => {
  return (
    <>
      <InputContainer hasError={props.hasError}>
        <input
          type={props.show ? "text" : props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          hasError={props.error}
        />
        {props.type === "password" && (
          <div onClick={() => props.setShow()}>
            {props.show ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </InputContainer>
      {props.error && <InputVaild>{props.error}</InputVaild>}
    </>
  );
};

export default Input;
