import * as React from "react";
import { StyledContainer } from "./../../../config/StyledContainer";
import { Logo } from "./Logo";
import { MainMenu } from "./MainMenu";
import { Search } from "./Search";
import { StyledHeaderFixed } from "./styled";

export const HeaderFixed = () => {
  return (
    <StyledHeaderFixed>
      <StyledContainer>
        <Logo />
        <MainMenu />
      </StyledContainer>
    </StyledHeaderFixed>
  );
};
