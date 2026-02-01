import React from "react";
import { Container, ItemWrapper, Title, Wrapper } from "./style.js";
import { Sidebar } from "/src/utilits/sidebar.js";
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        {Sidebar.map(({ id, title, data }) => {
          return (
            <Wrapper key={id}>
              {title && <Title>{title}</Title>}
              {data.map(({ id, icon: Element, title: item }) => {
                return (
                  <ItemWrapper key={id}>
                    {/* <Icons>{Element}</Icons> */}
                    {typeof Element === "function" ? <Element /> : Element}
                    <Title>{item}</Title>
                  </ItemWrapper>
                );
              })}
            </Wrapper>
          );
        })}
      </Container>
    );
  }
}
