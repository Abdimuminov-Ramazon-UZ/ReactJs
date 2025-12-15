import styled, { css, keyframes } from "styled-components";
//we add elements as we crerate in App.jsx first we create container div
//if we don't assign styled with import global name extensions doesn't work
export const Container = styled("div")`
  /* display: flex; */
  /* background-color: white; */
  margin: 20px;
  /* color: black; */
`;

//Inheritance
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: white;
  width: 100px;
  height: 40px;
  background: coral;
  border-radius: 8px;
  cursor: pointer;
  /* if we don't add & before :active doesn't work */
  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;
//we get inheritance which is owned by Button
export const ActiveButton = styled(Button)`
  height: 50px;
`;
//we create commmon group of codes as common
const common = css`
  color: red;
  font-family: bold;
  font-weight: "400";
  padding: 10px;
  border: 1px solid red;
`;
//we add animations with keyframes
const rotate = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform:rotate(360deg)
}`;
export const Rotate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid green;
  animation: ${rotate} 2s linear;
`;

export const Paragraph = styled.h1`
  //we need css codes and call here it
  ${common}
  font-size:16px;
  color: ${(props) => (props.left ? "yellow" : "green")};
`;
export const Title = styled.h1`
  ${common}
  /* we add extra codes under common because we change common codes  and machine gets only latest codes */
  font-size:24px;
`;
const getSize = (props) => {
  switch (props.type) {
    case "large":
      return "200px";
    case "medium":
      return "150px";
    case "small":
      return "100px";
    default:
      return "150px";
  }
};
export const Box = styled.div`
  /* we get here props as function's parametr */
  /* width: ${(props) => (props.type === "large" ? "200px" : "100px")};
  height: ${(props) => {
    return props.type === "large" ? "200px" : "100px";
  }}; */
  background-color: ${(props) => props.bg};
  width: ${getSize};
  border: 2px solid red;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;
