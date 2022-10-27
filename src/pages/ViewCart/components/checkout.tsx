import { Button, Divider, Grid } from "@mui/material"

type Props = {
  SubTotal: number | string
  ShippingFee: number | string
  Total: number | string
  handleCheckoutExit: (data: boolean) => void
}

const Checkout = ({ SubTotal, ShippingFee, Total, handleCheckoutExit }: Props) => {
  return (
    <Grid container sx={{ marginTop: "1em", marginBottom: "1em", rowGap: "1em" }}>
      <Divider />
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10em"
        }}
      >
        <span className="font-bold">Subtotal</span>
        <span> &#8369;{SubTotal}</span>
      </Grid>
      <Divider />
      <Grid
        item
        xs={12}
        md={12}
        sx={{ display: "flex", justifyContent: "center", gap: "10em" }}
      >
        <span className="font-bold">Shipping</span>
        <span> &#8369;{ShippingFee}</span>
      </Grid>
      <Divider />
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10em",
          marginTop: "2em"
        }}
      >
        <span className="font-bold">TOTAL</span>
        <span>&#8369;{Total}</span>
      </Grid>

      <Button
        onClick={() => handleCheckoutExit(true)}
        sx={{
          width: "100%",
          color: "white",
          fontWeight: 900,
          backgroundColor: "#002E94"
        }}
      >
        CHECKOUT
      </Button>
    </Grid>
  )
}

export default Checkout
