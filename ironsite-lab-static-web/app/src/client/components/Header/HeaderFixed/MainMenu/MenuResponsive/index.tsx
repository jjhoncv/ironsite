import * as React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { StyledMainMenu } from "./styled";

export const MenuResponsive = ({ data }) => {
  return (
    <StyledMainMenu>
      <ul>
        {data?.map((item, key1) => (
          <li key={key1}>
            <a href={item.link}>
              <span>{item.label}</span>
              <KeyboardArrowRightIcon />
            </a>
            {item?.items?.length > 0 && (
              <ul>
                {item?.items.map((subItem, key2) => (
                  <li key={key2}>
                    <a href={subItem.link}>{subItem.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </StyledMainMenu>
  );
};
