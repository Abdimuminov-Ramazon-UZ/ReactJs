import { Component } from "react";
import { Container, Title, User, Video, Wrapper } from "./style.js";
export default class Card extends Component {
  render() {
    const { user, video, view, time, title, id } = this.props.value;
    const { onDelete } = this.props;
    return (
      <Container>
        <Video src={video} alt="content"></Video>
        <Wrapper>
          <User src={user.img}></User>
          <div>
            <Title>{title}</Title>
            <Title $desc>{user.name}</Title>
            <div style={{ display: "flex" }}>
              <Title $desc>
                {view} {time}{" "}
                <button onClick={() => onDelete(id)}>Delete</button>
              </Title>
            </div>
          </div>
        </Wrapper>
      </Container>
    );
  }
}
