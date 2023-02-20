import React from "react";
import styled from "styled-components";

//styledcomponent로 조건 만들어주기
const StyledButton = styled.button`
  background: ${(props) => props.color || "white"};
  width: ${(props) => (props.size === "big" ? "200px" : "100px")};
  height: ${(props) => (props.size === "big" ? "80px" : "40px")};
`;

//버튼 안의 props들 설정해주기
const Button = ({ color, size, text }) => (
  <StyledButton color={color} size={size}>
    {text}
  </StyledButton>
);

export default Button;
