import safeAccess from "../../utils/safeAccess"
import CardCounts from "./components/cartCounts"
import ViewModel from "./ViewModel"
import DialogBox from "../../components/dialogs"
import AddedToCart from "./components/addedToCart"
import Checkout from "./components/checkout"
import ArrayOfObjects from "../../types/ArrayOfObject"

type Props = {
  headers?: { [key: string]: string }[]
  snackBarMessage: (value: boolean) => JSX.Element
  itemCounts: number | string
  handleOpenCart: (data: boolean) => void
  open: boolean
  cartItems: ArrayOfObjects[]
  handleQuantity: (action: string, id: unknown) => void
  handleRemoveCartItems: (data: string | number) => void
  SubTotal: number | string
  ShippingFee: number | string
  Total: number | string
  handleCheckoutExit: (data: boolean) => void
  checkout: boolean
}

const CartItems = (props: Props) => {
  const {
    headers,
    snackBarMessage,
    itemCounts,
    handleOpenCart,
    open,
    cartItems,
    handleQuantity,
    handleRemoveCartItems,
    SubTotal,
    ShippingFee,
    Total,
    handleCheckoutExit,
    checkout
  } = props

  return (
    <>
      <CardCounts itemCounts={itemCounts} handleOpenCart={handleOpenCart} />
      <DialogBox open={open}>
        <AddedToCart
          headers={headers}
          cartItemList={cartItems}
          handleQuantity={handleQuantity}
          handleCloseAddToCart={handleOpenCart}
          handleRemoveCartItems={handleRemoveCartItems}
        />
        <Checkout
          itemCounts={itemCounts}
          SubTotal={SubTotal}
          ShippingFee={ShippingFee}
          Total={Total}
          handleCheckoutExit={handleCheckoutExit}
        />
      </DialogBox>
      {snackBarMessage(checkout)}
    </>
  )
}

export default CartItems
