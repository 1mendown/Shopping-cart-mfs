import { RootState } from "../../store"
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit"
import IarrayOfObjects from "../../types/ArrayOfObject"

export interface IshopCartStateTypes {
  items: IarrayOfObjects[]
  viewItem: {
    isOpen: boolean
    [key: string]: unknown
  }
  addCartItems: IarrayOfObjects[]
  addCartMessage: {
    message: string
    open: boolean
  }
  viewCartOpen: boolean
  purchased: boolean
}

export const initialState: IshopCartStateTypes = {
  items: [],
  viewItem: {
    isOpen: false
  },
  addCartItems: [],
  addCartMessage: {
    message: "",
    open: false
  },
  viewCartOpen: false,
  purchased: false
}

export const ShopCartSlice = createSlice({
  name: "ShopCart",
  initialState,
  reducers: {
    setGetInitialData: (state, { payload }: PayloadAction<IarrayOfObjects[]>) => {
      return {
        ...state,
        items: payload
      }
    },
    setViewItemDetails: (state, { payload }: PayloadAction<IarrayOfObjects>) => {
      const toggle = Object.keys(payload).length === 0 ? false : true

      if (toggle) {
        return {
          ...state,
          viewItem: {
            ...state.viewItem,
            isOpen: true,
            ...payload
          }
        }
      } else {
        return {
          ...state,
          viewItem: {
            ...state.viewItem,
            isOpen: !state.viewItem.isOpen
          }
        }
      }
    },

    setAddTuCartItems: (
      state,
      { payload }: PayloadAction<IarrayOfObjects | boolean>
    ) => {
      const newArray = [...state.addCartItems]

      if (typeof payload === "object") {
        return {
          ...state,
          addCartItems: [...newArray, { ...payload, quantity: 1 }]
        }
      }

      return {
        ...state,
        addCartMessage: {
          ...state.addCartMessage,
          message: "Sucessfully Added To Cart",
          open: typeof payload === "object" ? true : false
        }
      }
    },
    setViewCartItems: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        viewCartOpen: payload
      }
    },
    setQuantityValue: (state, { payload }: PayloadAction<IarrayOfObjects[]>) => {
      return {
        ...state,
        addCartItems: payload
      }
    },
    setRemoveItemValue: (state, { payload }: PayloadAction<IarrayOfObjects[]>) => {
      return {
        ...state,
        addCartItems: payload
      }
    },
    setIsCheckout: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        viewCartOpen: false,
        purchased: payload
      }
    }
  }
})

export const {
  setGetInitialData,
  setViewItemDetails,
  setAddTuCartItems,
  setViewCartItems,
  setQuantityValue,
  setRemoveItemValue,
  setIsCheckout
} = ShopCartSlice.actions

export const setHandleQuantity = createAction<unknown>("setHandleQuantity")
export const setRemoveCartItems = createAction<string | number>("setRemoveCartItems")

export const shoppingCart = ShopCartSlice.reducer

export const shopSelector = (state: RootState) => state.shoppingCart
