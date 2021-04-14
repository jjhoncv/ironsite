import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";

export const GlobalStyle = createGlobalStyle`
* {
  padding:0;
  margin:0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
}
ul {
  list-style:none;
}
button {
  cursor: pointer;
}
a,
a:active,
a:hover,
a:visited {
  text-decoration: none;
  color: ${COLORS.PRIMARY}
}
body {  
  font-family: Open-Sans, Helvetica, Sans-Serif;
}
`;
