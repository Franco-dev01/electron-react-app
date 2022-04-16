import { Button } from "@mui/material";
import React from "react";
import { Props } from "../interfaces/ButtonProps";

export const Buttons = (props: Props) => {
  return (
    <Button variant={props.variant} color={props.color} className={props.className}>
      {props.label}
    </Button>
  );
};
