import * as React from "react";
import { StyledContainer } from "./../../../config/StyledContainer";
import { HeaderTopInfo } from "./HeaderTopInfo";
import { HeaderTopLinks } from "./HeaderTopLinks";
import { StyledHeaderTop } from "./styled";

export const HeaderTop = () => {
  return (
    <StyledHeaderTop>
      <StyledContainer>
        <HeaderTopInfo />
        <HeaderTopLinks />
      </StyledContainer>
    </StyledHeaderTop>
  );
};
