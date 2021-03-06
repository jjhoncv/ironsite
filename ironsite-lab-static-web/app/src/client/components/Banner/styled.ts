import styled from "styled-components";
import { DEVICES } from "../../config/devices";
import { StyledContainer } from "../../config/StyledContainer";

interface Props {
  image: string;
  zindex: number;
  loaded: boolean;
}

export const StyledBanner__Item = styled.div`
  background: url(${(props: Props) => props.image}) no-repeat center center;
  background-size: cover;
  height: 640px;
  width: 100%;
  position: relative;
  z-index: ${(props: Props) => props.zindex};
  opacity: ${(props: Props) => props.zindex};
  transition: all 0.5s;
  @media (max-width: ${`${DEVICES.Mobile}px`}) {
    height: 560px;
  }
  ${StyledContainer} {
    @media (max-width: ${`${DEVICES.Mobile}px`}) {
      height: 640px;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0.7;
        z-index: 9999;
      }
    }
  }
`;

export const StyledBanner__Title = styled.div`
  position: relative;
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
`;

export const StyledBanner__Description = styled.div`
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  opacity: 0.6;
  line-height: 24px;
`;

export const StyledBanner_Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 10rem 0 4.75rem 150px;
  position: relative;
  z-index: 9999;

  @media (max-width: ${`${DEVICES.Mobile}px`}) {
    padding-left: 50px;
  }
`;

export const StyledBanner = styled.div`
  position: relative;
  height: 640px;
  visibility: ${(props: Props) => (props.loaded ? "visible" : "hidden")};

  > div {
    position: absolute;
  }
`;
