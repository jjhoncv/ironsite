import * as React from "react";
import { HeaderFixed } from "./HeaderFixed";
import { HeaderTop } from "./HeaderTop";
import { StyledHeader } from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderTop />
      <HeaderFixed />
    </StyledHeader>
  );
};
