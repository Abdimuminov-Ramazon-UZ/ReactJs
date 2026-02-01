import { Component } from "react";
import { Container, Title, User, Video, Wrapper } from "./style.js";
export default class Card extends Component {
  render() {
    const { user, video, name, view, time } = this.props;
    return (
      <Container>
        <Video src={video} alt="content"></Video>
        <Wrapper>
          <User src={user}></User>
          {time}
          <div>
            <Title>Lorem ipsum dolor sit, amet consectetur adipisicing.</Title>
            <Title $desc={name}></Title>
          </div>
          <div style={{ display: "flex" }}>
            <Title $desc={view}></Title>
          </div>
        </Wrapper>
      </Container>
    );
  }
}
