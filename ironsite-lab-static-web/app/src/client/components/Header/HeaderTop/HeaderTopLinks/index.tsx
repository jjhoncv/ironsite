import * as React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { StyledHeaderTopLinks } from "./styled";

export const HeaderTopLinks = () => {
  return (
    <StyledHeaderTopLinks>
      <ul>
        <li>
          <a href="mailto:jjhoncv@gmail.com">
            <FacebookIcon />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="mailto:jjhoncv@gmail.com">
            <TwitterIcon />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="mailto:jjhoncv@gmail.com">
            <YouTubeIcon />
            <span>Youtube</span>
          </a>
        </li>
      </ul>
    </StyledHeaderTopLinks>
  );
};
