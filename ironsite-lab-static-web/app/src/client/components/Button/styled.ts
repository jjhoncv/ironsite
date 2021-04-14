import styled from "styled-components";
import { COLORS } from "../../config/colors";

export const StyledButton = styled.button`
  border: none;
  background: ${COLORS.BLUE};
  color: white;
  border-radius: 50px;
  padding: 12px 25px;
  display: flex;
  align-items: center;

  svg {
    font-size: 17px;
    margin-left: 4px;
    color: ${COLORS.WHITE};
  }
`;
