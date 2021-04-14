import * as React from "react";
// import { ServerStyleSheet } from "styled-components";
// import { renderToString } from "react-dom/server";
import { GlobalStyle } from "../../config/GlobalStyle";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface Props {
  children?: any;
}

export const Content = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export const Layout: React.FC<Props> = ({ children }) => {
  // const prerenderStyles = () => {
  //   const sheet = new ServerStyleSheet();
  //   renderToString(sheet.collectStyles(getBody()));
  //   return sheet.getStyleElement();
  // };

  return <Content>{children}</Content>;

  // return (
  //   <html>
  //     <head>
  //       <link href="/css/icons/css/material-icons.css" rel="stylesheet" />
  //       {prerenderStyles()}
  //       <title>{title}</title>
  //     </head>
  //     {getBody()}
  //   </html>
  // );
};
