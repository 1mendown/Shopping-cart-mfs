import React, { ReactNode } from "react"
import Dialog from "@mui/material/Dialog"

type Props = {
  open: boolean
  children: ReactNode
}

const DialogBox = (props: Props) => {
  const { open, children } = props

  return (
    <Dialog open={open} className="h-auto w-auto">
      {React.Children.map<ReactNode, ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, props)
        }
      })}
    </Dialog>
  )
}

export default DialogBox
