import * as React from "react"
import { shallowEqual } from "react-redux"
import { useAppSelector, useAppDispatch } from "../../store/index"
import {
  setGetInitialData,
  setViewItemDetails,
  shopSelector,
  setAddTuCartItems,
  setViewCartItems
} from "../../store/featuresSlice/shopCartSlice"

import { Products } from "../../services"

import ArrayOfObjects from "../../types/ArrayOfObject"

const ViewModel = () => {
  const ItemsSelector = useAppSelector(shopSelector, shallowEqual)
  const dispatch = useAppDispatch()

  const fetchData = async () => {
    const dataresult: ArrayOfObjects[] = await Products.GeAll("products")
    dispatch(setGetInitialData(dataresult))
  }

  const HandleViewItemCLick = React.useCallback((item: ArrayOfObjects) => {
    dispatch(setViewItemDetails(item))
  }, [])

  const handleCloseItem = React.useCallback((e: React.MouseEvent<any>) => {
    dispatch(setViewItemDetails({}))
  }, [])

  const handleAddTuCart = React.useCallback((item: ArrayOfObjects | boolean) => {
    dispatch(setAddTuCartItems(item))
  }, [])

  const handleCheckoutCart = React.useCallback((item: ArrayOfObjects) => {
    dispatch(setAddTuCartItems(item))
    dispatch(setViewItemDetails({}))
    dispatch(setViewCartItems(true))
  }, [])

  React.useEffect(() => {
    let mounted = true

    if (mounted) {
      fetchData()
    }

    return () => {
      mounted = false
    }
  }, [])

  console.log("ItemsSelector", ItemsSelector)

  return {
    ItemsSelector,
    setGetInitialData,
    HandleViewItemCLick,
    handleAddTuCart,
    handleCloseItem,
    handleCheckoutCart
  }
}

export default ViewModel
