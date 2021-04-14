import * as React from "react";
import { StyledLogo } from "./styled";

export const Logo = () => {
  return (
    <StyledLogo>
      <img src={`${process.env.SERVER_STATICS}/imgs/logo-ico.png`} />
      <h1>IronSite</h1>
    </StyledLogo>
  );
};
