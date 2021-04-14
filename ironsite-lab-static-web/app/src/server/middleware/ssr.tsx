import { Response } from "express";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/styles";
import React from "react";
import ReactDom from "react-dom/server";
import Html from "../utils/html";

const StyledComponentSheet = new ServerStyleSheet();
const materialSheets = new ServerStyleSheets();

export const SSR = ({res, data, Component, view}) => {
  const body = ReactDom.renderToString(
    StyledComponentSheet.collectStyles(
      materialSheets.collect(<Component {...data} />)
    )
  );
  const stylesStyledComponent = StyledComponentSheet.getStyleTags();
  const stylesMaterialSheets = materialSheets.toString();

  const styles =
    stylesStyledComponent +
    `<style id="material-css">` +
    stylesMaterialSheets +
    `</style>`;

  const script = JSON.stringify({ ...data });

  res.send(
    Html({
      body,
      script,
      styles,
      view
    })
  );
};
