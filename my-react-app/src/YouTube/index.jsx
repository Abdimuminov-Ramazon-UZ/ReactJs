import { Component } from "react";
import { data } from "../utilits/mock.js";
import Body from "./Body";
import SideBar from "./SideBar";
import { Category, Container, Icons, Input, Wrapper } from "./style.js";
import Logo from "/src/assets/image/download.png";
export default class YouTube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    const onFilter = (e) => {
      let res = data.filter((value) =>
        value.title.toLowerCase().includes(e.target.value),
      );
      this.setState({ data: res });
    };
    const onDelete = (id) => {
      let res = data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    return (
      <Container>
        <Wrapper>
          <Category>
            <Icons.Burger />
            <Icons.Logo src={Logo} alt="img" />
          </Category>
          <Category>
            <Input placeholder="search" onChange={onFilter} />
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
          <Body onDelete={onDelete} data={this.state.data} />
        </Container>
      </Container>
    );
  }
}
