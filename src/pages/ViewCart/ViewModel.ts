import * as React from "react"
import { shallowEqual } from "react-redux"
import { useAppSelector, useAppDispatch } from "../../store/index"

import safeAccess from "../../utils/safeAccess"
import RemoveDuplicate from "../../utils/removeDuplicateObjects"

import {
  shopSelector,
  setViewCartItems,
  setHandleQuantity,
  setRemoveCartItems,
  setIsCheckout
} from "../../store/featuresSlice/shopCartSlice"

const ViewModel = () => {
  const ItemsSelector = useAppSelector(shopSelector, shallowEqual)
  const dispatch = useAppDispatch()

  const [checkout, setCheckout] = React.useState<boolean>(false)

  const removeItemDuplicates = React.useMemo(
    () => RemoveDuplicate(safeAccess(ItemsSelector, ["addCartItems"])),
    [safeAccess(ItemsSelector, ["addCartItems"])]
  )
  const handleOpenCart = React.useCallback((data: boolean) => {
    dispatch(setViewCartItems(data))
  }, [])

  const handleQuantity = React.useCallback((data: string, id: unknown) => {
    dispatch(setHandleQuantity({ data, id }))
  }, [])

  const handleRemoveCartItems = React.useCallback((data: string | number) => {
    dispatch(setRemoveCartItems(data))
  }, [])

  const computeSubtotal = React.useMemo(
    () =>
      removeItemDuplicates.reduce((sum, val) => {
        return sum + val["quantity"] * val["price"]
      }, 0),
    [removeItemDuplicates]
  )

  const computeShippingFee = React.useMemo(
    () => computeSubtotal * (50 / 100),
    [computeSubtotal]
  )

  const computeTotalValue = React.useMemo(
    () => computeSubtotal + computeShippingFee,
    [computeSubtotal, computeShippingFee]
  )

  const handleCheckoutExit = React.useCallback((data: boolean) => {
    dispatch(setIsCheckout(data))
    setTimeout(() => {
      dispatch(setIsCheckout(!data))
    }, 1000)
  }, [])

  React.useEffect(() => {
    setCheckout(safeAccess(ItemsSelector, ["purchased"]))
    const timeOut = setTimeout(() => setCheckout(false), 2000)

    return () => {
      clearTimeout(timeOut)
    }
  }, [safeAccess(ItemsSelector, ["purchased"])])

  console.log("ItemsSelector", ItemsSelector)

  return {
    cartItemsSelector: ItemsSelector,
    cartItems: removeItemDuplicates,
    itemCounts: removeItemDuplicates.length,
    handleOpenCart,
    handleQuantity,
    handleRemoveCartItems,
    subTotal: computeSubtotal.toFixed(2),
    shippingFee: computeShippingFee.toFixed(2),
    total: computeTotalValue.toFixed(2),
    handleCheckoutExit,
    checkout
  }
}

export default ViewModel
