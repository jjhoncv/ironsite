import * as React from "react";
import { StyledContainer } from "../../config/StyledContainer";
import { Button } from "../Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import {
  StyledBanner__Item,
  StyledBanner__Title,
  StyledBanner__Description,
  StyledBanner_Wrapper,
} from "./styled";

export const BannerItem = ({ banner }) => {
  return (
    <StyledBanner__Item image={banner.image} zindex={banner.zindex}>
      <StyledContainer>
        <StyledBanner_Wrapper>
          <StyledBanner__Title>{banner.title}</StyledBanner__Title>
          <StyledBanner__Description>
            {banner.description}
          </StyledBanner__Description>
          <Button
            onClick={() => {
              window.location.href = banner.link;
            }}
            Icon={<ArrowRightAltIcon />}
          >
            {banner.text}
          </Button>
        </StyledBanner_Wrapper>
      </StyledContainer>
    </StyledBanner__Item>
  );
};
