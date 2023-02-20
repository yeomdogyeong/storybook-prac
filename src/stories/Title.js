import React from "react";

//Title의 props로 title,textColor설정
const Title = ({ title, textColor }) => (
  <h1 style={{ color: textColor }}>{title}</h1>
);
//react에 style={{}}하는거 잊지말기
export default Title;
