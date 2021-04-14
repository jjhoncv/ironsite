import styled from "styled-components";
import { StyledContainer } from "./../../../config/StyledContainer";

export const StyledHeaderFixed = styled.div`
  height: 81px;
  box-shadow: 0px 0px 14px 0px rgba(77, 82, 94, 0.15);
  position: relative;
  
  ${StyledContainer} {
    display: flex;
    height: 100%;
  }
`;
