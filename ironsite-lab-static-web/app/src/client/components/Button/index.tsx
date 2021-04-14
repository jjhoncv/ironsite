import React from "react";
import { StyledButton } from "./styled";

interface Props {
  children: any;
  Icon: any;
  onClick: Function;
}

export const Button: React.FC<Props> = ({ Icon, children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children} {Icon}
    </StyledButton>
  );
};
