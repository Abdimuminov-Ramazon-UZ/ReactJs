//Fourth-lesson
//Style components
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ActiveButton, Button, Rotate } from "./stateStyle.js";

const GlobalStyle = createGlobalStyle`
  body{
    background:${(props) => props.theme.bg};
    color:${(props) => props.theme.color}
  }
`;

export class Stories extends React.Component {
  state = {
    light: false,
  };
  render() {
    const theme = {
      bg: this.state.light ? "white" : "black",
      color: this.state.light ? "black" : "white",
    };
    return (
      // we write here styled componnent's name
      // <Container>
      //we wrap with ThemeProvider for install Theme
      <ThemeProvider theme={theme}>
        {/* <Title>Styled components</Title> */}
        {/* we add props as attributes in react elements */}
        {/* we send props status,value ans only prop name.status is type,value is bg,prop name is left */}
        {/* <Box bg="white" type="large">
          Large other elements
        </Box>
        <Box bg="coral" type="medium">
          Medium other elements
        </Box>
        <Box bg="black" type="small">
          {" "}
          Small other elements
        </Box>
        <Title>little brothers</Title>
        <Paragraph left>other brothers</Paragraph> */}
        <h1>Theme provider</h1>
        <GlobalStyle />
        <Button>Click me</Button>
        <ActiveButton>Active button</ActiveButton>
        <Rotate>rotate</Rotate>
        <button onClick={() => this.setState({ light: !this.state.light })}>
          theme
        </button>
        {/* // </Container> */}
      </ThemeProvider>
    );
  }
}
