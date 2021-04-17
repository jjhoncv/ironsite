import * as React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { StyledMainMenu } from "./styled";

export const MenuDesktop = ({ data }) => {
  return (
    <StyledMainMenu>
      <ul>
        {data?.map((item, key1) => (
          <li key={key1}>
            <a href={item.link}>
              <span>{item.label}</span>
              <KeyboardArrowDownIcon />
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
