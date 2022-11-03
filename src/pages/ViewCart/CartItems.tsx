import CardCounts from "./components/cartCounts"
import DialogBox from "../../components/dialogs"
import AddedToCart from "./components/addedToCart"
import Checkout from "./components/checkout"
import IarrayOfObjects from "../../types/ArrayOfObject"

type Tprops = {
  headers?: { [key: string]: string }[]
  snackBarMessage: (value: boolean) => JSX.Element
  itemCounts: number | string
  handleOpenCart: (data: boolean) => void
  open: boolean
  cartItems: IarrayOfObjects[]
  handleQuantity: (action: string, id: unknown) => void
  handleRemoveCartItems: (data: string | number) => void
  subTotal: number | string
  shippingFee: number | string
  total: number | string
  handleCheckoutExit: (data: boolean) => void
  checkout: boolean
}

const CartItems = (props: Tprops) => {
  const {
    headers,
    snackBarMessage,
    itemCounts,
    handleOpenCart,
    open,
    cartItems,
    handleQuantity,
    handleRemoveCartItems,
    subTotal,
    shippingFee,
    total,
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
          subTotal={subTotal}
          shippingFee={shippingFee}
          total={total}
          handleCheckoutExit={handleCheckoutExit}
        />
      </DialogBox>
      {snackBarMessage(checkout)}
    </>
  )
}

export default CartItems
