import * as React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

import { StyledHeaderTopInfo } from "./styled";

export const HeaderTopInfo = () => {
  return (
    <StyledHeaderTopInfo>
      <ul>
        <li>
          <a href="mailto:jjhoncv@gmail.com">
            <EmailIcon fontSize="small"/>
            <span>jjhoncv@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="tel:962235499">
            <PhoneIcon fontSize="small"/>
            <span>962-235-499</span>
          </a>
        </li>
      </ul>
    </StyledHeaderTopInfo>
  );
};
