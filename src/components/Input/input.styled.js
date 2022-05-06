import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px auto;
  overflow: hidden;
  border: ${(props) =>
    props.hasError ? "1px solid red" : "1px solid rgba(0, 0, 0, 0.1)"};
  border-radius: 5px;
  & > input {
    width: 100%;
    height: 40px;
    padding: 10px;
  }
  & > div {
    padding-right: 10px;
    cursor: pointer;
    svg {
      vertical-align: middle;
    }
  }
`;

export const InputVaild = styled.div`
  color: red;
  font-size: 12px;
`;
