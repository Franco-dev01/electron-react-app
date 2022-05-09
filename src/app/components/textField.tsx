import { TextField } from "@mui/material"
import React from "react"
import { TextFieldType } from "../types/textField"

export default function textField(props: TextFieldType) {
  const {value,
    label,
    id,
    variant,
    type,
    required,
    placeholder,
    className,
  } = props
  return (
    <TextField
    id={id}
    required={required}
    type={type}
    value={value}
    label={label}
    variant={variant}
    className={className} 
    placeholder={placeholder}

    />
  )
}
