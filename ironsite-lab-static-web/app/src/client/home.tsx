import React from "react";
import ReactDom from "react-dom";
import { Home } from "./view/Home";

const _data = (window as any).data;

ReactDom.render(
    <Home {..._data} />,
  document.getElementById("app")
);
