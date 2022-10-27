import * as React from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

type Props = {
  itemCounts: number | string
  handleOpenCart: (data: boolean) => void
}

const CartCounts = ({ itemCounts, handleOpenCart }: Props) => {
  return (
    <div className="relative">
      <ShoppingCartIcon
        fontSize="large"
        sx={{ cursor: "pointer" }}
        onClick={() => handleOpenCart(true)}
      />
      <h1 className="absolute top-0 right-0 mr-10 min-w-0 font-extrabold text-blue-600">
        {itemCounts}
      </h1>
    </div>
  )
}

export default CartCounts
