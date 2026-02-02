import { Component } from "react";
// /import { data } from "../../utilits/mock.js";
import Card from "./Card";
import { Container } from "./style.js";
export default class Body extends Component {
  render() {
    // console.log(this.props.data);
    const { onDelete } = this.props;
    const data = this.props.data;
    return (
      <Container>
        {data.length ? (
          data.map((value) => {
            return <Card key={value.id} onDelete={onDelete} value={value} />;
          })
        ) : (
          <h1>not found</h1>
        )}
      </Container>
    );
  }
}
