import { Component } from "react";
import Body from "./Body";
import SideBar from "./SideBar";
import { Category, Container, Icons, Input, Wrapper } from "./style.js";
import Logo from "/src/assets/image/download.png";
export default class YouTube extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Category>
            <Icons.Burger />
            <Icons.Logo src={Logo} alt="img" />
          </Category>
          <Category>
            <Input placeholder="search" />
            <Icons.Searchicon />
          </Category>
          <Category $end={true}>
            <Icons.Video />
            <Icons.Grid />
            <Icons.Bell />
            <Icons.User />
          </Category>
        </Wrapper>
        <Container $flexed={true}>
          <SideBar />
          <Body />
        </Container>
      </Container>
    );
  }
}
