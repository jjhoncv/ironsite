import * as React from "react";
import "./style.scss";

interface Props {
  children: any;
  onSubmit?: Function;
  grid?: boolean;
  ref?: any;
}

const FormForward: React.ForwardRefRenderFunction<any, Props> = (
  { grid, onSubmit, children },
  ref
) => {
  return (
    <form
      ref={ref as any}
      onSubmit={(e) => onSubmit(e)}
      className={`form ${grid ? "grid" : ""}`}
    >
      {children}
    </form>
  );
};

export const Form = React.forwardRef(FormForward);
