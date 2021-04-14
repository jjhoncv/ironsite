import * as React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { StyledMainMenu } from "./styled";

export const MainMenu = () => {
  return (
    <StyledMainMenu>
      <ul>
        <li>
          <a href="#">
            <span>Home</span>
            <KeyboardArrowDownIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Servicios</span>
            <KeyboardArrowDownIcon />
          </a>
          <ul>
            <li>
              <a href="http://">Item 1</a>
            </li>
            <li>
              <a href="http://">Item 2</a>
            </li>
            <li>
              <a href="http://">Item 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span>Pages</span>
            <KeyboardArrowDownIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Shop</span>
            <KeyboardArrowDownIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <span>News</span>
            <KeyboardArrowDownIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Gallery</span>
            <KeyboardArrowDownIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Contact Us</span>
            <KeyboardArrowDownIcon />
          </a>
        </li>
      </ul>
    </StyledMainMenu>
  );
};
