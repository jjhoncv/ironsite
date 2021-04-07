import * as React from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";
import { GlobalStyle } from "../config/GlobalStyle";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Props {
  title: string;
  children?: any;
}

export const Layout: React.FC<Props> = ({ title, children }) => {
  const prerenderStyles = () => {
    const sheet = new ServerStyleSheet();
    renderToString(sheet.collectStyles(getBody()));
    return sheet.getStyleElement();
  };

  const getBody = () => {
    return (
      <>
        <GlobalStyle />
        <Header />
        <body>{children}</body>
        <Footer />
      </>
    );
  };

  return (
    <html>
      <head>
        {prerenderStyles()}
        <title>{title}</title>
      </head>
      {getBody()}
    </html>
  );
};
