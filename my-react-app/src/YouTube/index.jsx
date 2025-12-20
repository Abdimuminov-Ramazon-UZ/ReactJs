import { Component } from "react";
import Body from "./Body";
import SideBar from "./SideBar";
import { Container } from "./style.js";
export default class YouTube extends Component {
  render() {
    return (
      <Container>
        <SideBar />
        <Body />
      </Container>
    );
  }
}
