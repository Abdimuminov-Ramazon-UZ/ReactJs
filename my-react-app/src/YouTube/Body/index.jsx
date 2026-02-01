import { Component } from "react";
import { data } from "../../utilits/mock.js";
import Card from "./Card";
import { Container } from "./style.js";
export default class Body extends Component {
  render() {
    return (
      <Container>
        {data.map((value) => {
          return (
            <Card
              view="1200"
              time="2M"
              name={"Academy "}
              user={"https://www.freepik.com/free-photos-vectors/default-user"}
              video={
                "https://www.istockphoto.com/photo/close-up-hands-of-unrecognizable-man-holding-and-using-smartphone-standing-on-city-gm2199471016-617222877?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=user"
              }
            />
          );
        })}
      </Container>
    );
  }
}
