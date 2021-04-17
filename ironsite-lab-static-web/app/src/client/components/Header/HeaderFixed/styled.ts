import styled, { css } from "styled-components";
import { DEVICES } from "../../../config/devices";
import { StyledContainer } from "./../../../config/StyledContainer";

interface Props {
  show?: boolean;
}

export const StyledHeaderFixed = styled.div`
  height: 81px;
  box-shadow: 0px 2px 14px 0px rgb(77 82 94 / 15%);
  position: relative;
  z-index: 9999;

  ${StyledContainer} {
    display: flex;
    height: 100%;
    @media (max-width: ${`${DEVICES.DesktopL}px`}) {
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const StyledBurgerMobile = styled.div`
  display: none;
  @media (max-width: ${`${DEVICES.Tablet}px`}) {
    display: block;
  }
`;
export const StyledHeaderTopMobile = styled.div`
  display: none;
  @media (max-width: ${`${DEVICES.Tablet}px`}) {
    display: block;
  }
`;

export const StyledBg = styled.div`
  position: absolute;
  inset: 0;
  top: 81px;
  width: 100%;
  height: 100%;
  background: #0000008f;
  display: none;
  z-index: 1;
  ${(props: Props) =>
    props.show &&
    css`
      display: block;
    `}
`;
