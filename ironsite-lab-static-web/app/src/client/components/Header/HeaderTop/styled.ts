import { StyledContainer } from "./../../../config/StyledContainer";
import styled from "styled-components";
import { COLORS } from "../../../config/colors";

export const StyledHeaderTop = styled.div`
  background: ${COLORS.PRIMARY};
  height: 45px;
  display: flex;
  ${StyledContainer} {
    display: flex;
    justify-content: space-between;
  }
`;
