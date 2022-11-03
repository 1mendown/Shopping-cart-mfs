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
import IdataLoad from "../../types/dataLoad"
import safeAccess from "../../utils/safeAccess"
import IarrayOfObjects from "../../types/ArrayOfObject"

const ListItemsViewModel = (dataLoad?: IdataLoad) => {
  const ItemsSelector = useAppSelector(shopSelector, shallowEqual)
  const dispatch = useAppDispatch()

  const fetchData = async () => {
    const dataresult: IarrayOfObjects[] = await safeAccess(dataLoad, [
      "api",
      "getAll"
    ])

    dispatch(setGetInitialData(safeAccess(dataresult, ["data"])))
  }

  const handleViewItemCLick = React.useCallback((item: IarrayOfObjects) => {
    dispatch(setViewItemDetails(item))
  }, [])

  const handleCloseItem = React.useCallback((e: React.MouseEvent<any>) => {
    dispatch(setViewItemDetails({}))
  }, [])

  const handleAddTuCart = React.useCallback((item: IarrayOfObjects | boolean) => {
    dispatch(setAddTuCartItems(item))
  }, [])

  const handleCheckoutCart = React.useCallback((item: IarrayOfObjects) => {
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
    handleViewItemCLick,
    handleAddTuCart,
    handleCloseItem,
    handleCheckoutCart
  }
}

export default ListItemsViewModel
