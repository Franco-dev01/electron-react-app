import { Button, Tooltip } from "@mui/material";
import React from "react";
import { ButtonType } from "../types/button";

const Buttons = (props: ButtonType) => {
  const { title, type, variant, disabled, className, id, loading } = props;

  const buttonRef = React.createRef<HTMLElement>();
  
    return (
<>
</>
      // <Button
      //   id={id}
      //   type={type}
      //   ref={buttonRef}
      //   variant={variant}
      //   disabled={disabled}
      //   loading={loading ?? false}
      //   className={className}
      //   >
      //   {title ?? ""}
      // </Button>

    );
};

export default Buttons;
