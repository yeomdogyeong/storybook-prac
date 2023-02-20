import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  width: ${(props) => (props.size === "big" ? "100px" : "50px")};
  heigh: ${(props) => (props.size === "big" ? "100px" : "50px")};
  color: ${(props) => props.color || "black"};
`;

const MyButton = ({ color, size, text }) => (
  <StyleButton color={color} size={size}>
    {text}
  </StyleButton>
);

export default MyButton;
