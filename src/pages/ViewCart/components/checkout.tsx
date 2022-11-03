import { Button, Divider, Grid } from "@mui/material"

type Tprops = {
  subTotal: number | string
  shippingFee: number | string
  total: number | string
  handleCheckoutExit: (data: boolean) => void
  itemCounts: number | string
}

const Checkout = ({
  subTotal,
  shippingFee,
  total,
  handleCheckoutExit,
  itemCounts
}: Tprops) => {
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
        <span> &#8369;{subTotal}</span>
      </Grid>
      <Divider />
      <Grid
        item
        xs={12}
        md={12}
        sx={{ display: "flex", justifyContent: "center", gap: "10em" }}
      >
        <span className="font-bold">Shipping</span>
        <span> &#8369;{shippingFee}</span>
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
        <span>&#8369;{total}</span>
      </Grid>

      <Button
        onClick={() => itemCounts && handleCheckoutExit(true)}
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
