import * as React from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

export interface Istate {
  open: boolean
  message: string
  handleClose: (data: boolean) => void
}

export default function PositionedSnackbar({ open, message, handleClose }: Istate) {
  const [openSnackbar, setOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    setOpen(open)
  }, [open])

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={500}
        onClose={() => {
          setOpen(false)
          handleClose(false)
        }}
        key={`top center`}
      >
        <MuiAlert severity="success" sx={{ width: "100%" }}>
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  )
}
