import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import Symbols from './Symbols';
const theme = {
  colors: {
    orange: "#FFBC5B",
    black: "#292F36",
    white: "#FFFFFF",
    seafoam: "#8FF6E4"
  }
};

injectGlobal`
  @font-face {
    font-family: 'Gotham';
    src: url('../static/Gotham-Medium.woff') format('woff');
  }
  
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: ${theme.colors.black};
    font-size: 1.6rem;
    line-height: 2;
    margin: 0;
    padding: 0;
    font-family: 'Gotham';
  }
  
  a {
    text-decoration: none;
    color: ${theme.colors.black};
  }
  .icon {
    width: 1em;
    height: 1em;
  }
  .icon-coco {
    width: 16rem;
    height: 4rem;
  }
`;
const StyledPage = styled.div`
  background: white;
  color: black;
`;
export default class Page extends Component {
  render() {
    return(
      <ThemeProvider theme={theme}>

        <StyledPage>
          <Meta />
          <Header />
          <Symbols />
          {this.props.children}
        </StyledPage>
      </ThemeProvider>
    )
  }
}