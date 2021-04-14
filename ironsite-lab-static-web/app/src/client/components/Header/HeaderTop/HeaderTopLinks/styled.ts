import styled from "styled-components";
import { COLORS } from "../../../../config/colors";

export const StyledHeaderTopLinks = styled.div`
  display: flex;
  color: #cecece;

  ul {
    display: flex;
    height: 100%;
    align-items: center;
    min-width: 300px;
    justify-content: space-between;

    li {
      a {
        display: flex;
        align-items: center;
        color: ${COLORS.WHITE};
        opacity: 0.8;
        font-size: 15px;
        &:hover {
          opacity: 1;
        }
        svg {
          font-size: 14px;
          margin-right: 5px;
        }
      }
    }
  }
`;
