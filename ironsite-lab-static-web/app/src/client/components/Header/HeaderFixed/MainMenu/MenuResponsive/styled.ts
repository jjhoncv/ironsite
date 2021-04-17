import styled from "styled-components";
import { COLORS } from "../../../../../config/colors";
import { DEVICES } from "../../../../../config/devices";

export const StyledMainMenu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 250px;
  justify-content: flex-end;
  @media screen and (min-width: ${`${DEVICES.Tablet}px`}) {
    display: none;
  }
  position: fixed;
  left: 0;
  top: 81px;
  bottom: 0;
  z-index: 999;
  height: 100%;
  right: 0;
  background: white;

  > ul {
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    li {
      width: 100%;
      position: relative;
      height: 50px;
      a {
        display: flex;
        align-items: center;
        color: ${COLORS.PRIMARY};
        font-size: 15px;
        height: 100%;
        justify-content: space-between;
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
