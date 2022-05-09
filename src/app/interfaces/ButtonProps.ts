import React from "react";

const buttonRef = React.createRef<HTMLElement>();

export interface Props {
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: "contained" | "outlined";
  disabled?: boolean;
  tooltip?: string;
  shape?: "circle" | "round";
  size: "small" | "medium" | "large";
  loading?: boolean;
  block?: boolean;
  color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  label: string;
}
