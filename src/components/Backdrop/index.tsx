import React from "react"
import { Backdrop as BackdropMUI, BackdropProps } from "@mui/material"

const Backdrop = (props: BackdropProps) => {
  return (
    <BackdropMUI {...props} />
  )
}

export default Backdrop