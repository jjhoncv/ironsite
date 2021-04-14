import styled from "styled-components";
import { COLORS } from "../../../../config/colors";

export const StyledMainMenu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  ul {
    max-width: 775px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    li {
      position: relative;
      height: 80%;
      a {
        display: flex;
        align-items: center;
        color: ${COLORS.PRIMARY};
        font-size: 15px;
        height: 100%;
        svg {
          font-size: 17px;
          margin-left: 4px;
          color: ${COLORS.BLUE};
        }
      }
      ul {
        position: absolute;
        top: 100%;
        min-width: 200px;
        background: white;
        height: auto;
        padding: 10px 0;
        opacity: 0;
        visibility: hidden;
        z-index: 4;
        transform: translateY(15px);
        transition: all 0.2s 0.2s;
        display: flex;
        flex-direction: column;
        box-shadow: 2px 4px 20px 1px rgba(45, 45, 45, 0.13);

        li {
          padding: 0.5rem 1.5625rem;
          width: 100%;
        }
      }
      &:hover ul {
        /* display: block;
         */
        transform: none;
        opacity: 1;
        visibility: visible;
        z-index: 5;
      }
    }
  }
`;
