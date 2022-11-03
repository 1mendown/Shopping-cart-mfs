import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import ListOfItems from "./ListOfItems/ListOfItems"
import Container from "@mui/material/Container"
import ViewCart from "./ViewCart/CartItems"
import CssBaseline from "@mui/material/CssBaseline"
import IdataIN from "../types/dataIn"
import IdataLoad from "../types/dataLoad"
import IdataOut from "../types/dataOut"
import safeAccess from "../utils/safeAccess"
import ListItemViewModel from "../pages/ListOfItems/ListItemsViewModel"
import CartItemsViewModel from "../pages/ViewCart/ViewModel"

interface Iprops {
  dataIn?: IdataIN
  dataLoad?: IdataLoad
  dataOut?: IdataOut
}

const ShoppingCartIndex = (props: Iprops) => {
  const { dataIn, dataLoad, dataOut } = props

  const {
    ItemsSelector,
    handleAddTuCart,
    handleViewItemCLick,
    handleCloseItem,
    handleCheckoutCart
  } = ListItemViewModel(dataLoad)

  const {
    cartItemsSelector,
    cartItems,
    itemCounts,
    handleOpenCart,
    handleQuantity,
    handleRemoveCartItems,
    subTotal,
    shippingFee,
    total,
    handleCheckoutExit,
    checkout
  } = CartItemsViewModel()

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
                <ViewCart
                  open={safeAccess(cartItemsSelector, ["viewCartOpen"])}
                  itemCounts={itemCounts}
                  headers={safeAccess(dataIn, ["addToCartHeader"])}
                  snackBarMessage={safeAccess(dataOut, ["snackBarMessage"])}
                  handleOpenCart={handleOpenCart}
                  cartItems={cartItems}
                  handleQuantity={handleQuantity}
                  handleRemoveCartItems={handleRemoveCartItems}
                  subTotal={subTotal}
                  shippingFee={shippingFee}
                  total={total}
                  handleCheckoutExit={handleCheckoutExit}
                  checkout={checkout}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} id="list-items-box">
              <ListOfItems
                cardItems={safeAccess(ItemsSelector, ["viewItem"])}
                handleCloseItem={handleCloseItem}
                handleAddTuCart={handleAddTuCart}
                handleCheckoutCart={handleCheckoutCart}
                handleViewItemCLick={handleViewItemCLick}
                items={safeAccess(ItemsSelector, ["items"])}
                openCardItems={safeAccess(ItemsSelector, ["viewItem", "isOpen"])}
                headers={safeAccess(dataIn, ["itemListHeader"])}
              />
              {dataOut?.addToCartSnackBarMessage(
                safeAccess(ItemsSelector, ["addCartMessage", "open"]),
                safeAccess(ItemsSelector, ["addCartMessage", "message"]),
                handleAddTuCart
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}
export default ShoppingCartIndex
