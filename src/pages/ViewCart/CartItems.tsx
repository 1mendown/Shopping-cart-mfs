import safeAccess from "../../utils/safeAccess"
import CardCounts from "./components/cartCounts"
import ViewModel from "./ViewModel"
import DialogBox from "../../components/dialogs"
import AddedToCart from "./components/addedToCart"
import Checkout from "./components/checkout"
import Box from "@mui/material/Box"

type Props = {}

const CartItems = (props: Props) => {
  const {
    ItemsSelector,
    cartItems,
    itemCounts,
    handleOpenCart,
    handleQuantity,
    handleRemoveCartItems,
    SubTotal,
    ShippingFee,
    Total,
    handleCheckoutExit,
    checkout
  } = ViewModel()

  return (
    <>
      <CardCounts itemCounts={itemCounts} handleOpenCart={handleOpenCart} />
      <DialogBox open={safeAccess(ItemsSelector, ["viewCartOpen"])}>
        <AddedToCart
          cartItemList={cartItems}
          handleQuantity={handleQuantity}
          handleCloseAddToCart={handleOpenCart}
          handleRemoveCartItems={handleRemoveCartItems}
        />
        <Checkout
          SubTotal={SubTotal}
          ShippingFee={ShippingFee}
          Total={Total}
          handleCheckoutExit={handleCheckoutExit}
        />
      </DialogBox>
      <DialogBox open={checkout}>
        <Box sx={{ padding: "2em" }}>THANKS FOR YOUR PURCHASE</Box>
      </DialogBox>
    </>
  )
}

export default CartItems
