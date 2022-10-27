import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Textfield from "./components/textfield"
import ListOfItems from "./pages/ListOfItems/ListOfItems"
import Container from "@mui/material/Container"
import ViewCart from "./pages/ViewCart/CartItems"

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Box sx={{ bgcolor: "white", height: "100vh", flexGrow: 1 }}>
          <Grid container>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              id="title header"
              className="mt-5"
            >
              <Grid item xs={8}>
                SIMPLE SHOPPING CART
              </Grid>
              <Grid item xs={4} className="flex justify-end">
                <ViewCart />
              </Grid>
            </Grid>
            <Grid item xs={12} id="list-items-box">
              <ListOfItems />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}
