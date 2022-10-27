import React from "react"
import TextField from "@mui/material/TextField"

type Props<T> = {
  name?: T & string
  value?: T
  tailwindStyles?: React.CSSProperties & string
  rest?: T
}

const Textfield = <T extends object>({
  name,
  tailwindStyles,
  ...rest
}: Props<T>) => {
  return (
    <TextField className={tailwindStyles} name={name} {...rest} margin="normal" />
  )
}

export default Textfield
