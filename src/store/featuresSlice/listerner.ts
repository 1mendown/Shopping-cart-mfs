import { AnyAction, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit"
import RemoveDuplicate from "../../utils/removeDuplicateObjects"
import ArrayOfObjects from "../../types/ArrayOfObject"
import safeAccess from "../../utils/safeAccess"

import {
  setHandleQuantity,
  setQuantityValue,
  setRemoveCartItems,
  setRemoveItemValue
} from "./shopCartSlice"

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  actionCreator: setRemoveCartItems,
  effect: async (action: AnyAction, listenerApi: any) => {
    try {
      const state = RemoveDuplicate(
        listenerApi.getOriginalState()?.ShopCartReducer?.addCartItems
      )

      const newState = state.filter(
        (items: ArrayOfObjects) => items.id !== action.payload
      )

      listenerApi.dispatch(setRemoveItemValue(newState))
      listenerApi.cancelActiveListeners()
    } catch (error) {
      throw error
    }
  }
})

listenerMiddleware.startListening({
  actionCreator: setHandleQuantity,
  effect: async (action: AnyAction, listenerApi: any) => {
    try {
      const payload = action.payload
      const state = RemoveDuplicate(
        listenerApi.getOriginalState()?.ShopCartReducer?.addCartItems
      )

      const newValue = state.map((items: ArrayOfObjects) => {
        if (payload.data === "add" && items.id === payload.id) {
          return {
            ...items,
            quantity: safeAccess(items, ["quantity"]) + 1
          }
        } else if (payload.data === "minus" && items.id === payload.id) {
          return {
            ...items,
            quantity:
              safeAccess(items, ["quantity"]) > 1
                ? safeAccess(items, ["quantity"]) - 1
                : 1
          }
        } else {
          return items
        }
      })

      listenerApi.dispatch(setQuantityValue(newValue))
      listenerApi.cancelActiveListeners()
    } catch (e) {
      throw e
    }
  }
})
