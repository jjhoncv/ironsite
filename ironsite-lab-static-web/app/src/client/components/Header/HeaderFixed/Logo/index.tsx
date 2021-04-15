import * as React from "react";
import { StyledLogo } from "./styled";

export const Logo = () => {
  return (
    <StyledLogo>
      <img
        src={`${process.env.SERVER_STATICS}/imgs/logo-ico.png`}
        width="36"
        height="35"
      />
      <h1>IronSite</h1>
    </StyledLogo>
  );
};
