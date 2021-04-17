import * as React from "react";
import * as ReactDom from "react-dom";
import { StyledContainer } from "./../../../config/StyledContainer";
import { Logo } from "./Logo";
import { MenuDesktop } from "./MainMenu/MenuDesktop";
import { MenuResponsive } from "./MainMenu/MenuResponsive";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { StyledBg } from "./styled";

import {
  StyledBurgerMobile,
  StyledHeaderFixed,
  StyledHeaderTopMobile,
} from "./styled";
// @ts-ignore
import dataMenu from "./menu.json";

export const HeaderFixed = () => {
  const [show, setShow] = React.useState(false);
  let domBg = null;
  if (typeof document !== "undefined") {
    domBg = document?.getElementById("bg");
  }

  const handleShowMenu = () => {
    setShow(!show);
  };

  React.useEffect(() => {
    ReactDom.render(
      <StyledBg onClick={() => setShow(false)} show={show} />,
      domBg
    );
  }, [show]);

  return (
    <>
      <StyledHeaderFixed>
        <StyledContainer>
          <StyledBurgerMobile>
            <MenuIcon onClick={() => handleShowMenu()} fontSize="large" />
          </StyledBurgerMobile>
          <Logo />
          <MenuDesktop data={dataMenu} />
          <StyledHeaderTopMobile>
            <MoreVertIcon fontSize="large" />
          </StyledHeaderTopMobile>
        </StyledContainer>
      </StyledHeaderFixed>
      {show && <MenuResponsive data={dataMenu} />}
    </>
  );
};
