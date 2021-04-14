import styled from "styled-components";
import { DEVICES } from "./devices";

export const StyledContainer = styled.div`
  max-width: ${DEVICES.DesktopL};
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${DEVICES.DesktopL}) {
    padding: 0 15px;
  }
`;
