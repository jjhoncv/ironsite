import styled from "styled-components";
import { DEVICES } from "./devices";

export const StyledContainer = styled.div`
  max-width: ${`${DEVICES.DesktopL}px`};
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${`${DEVICES.DesktopL}px`}) {
    padding: 0 15px;
  }
`;
