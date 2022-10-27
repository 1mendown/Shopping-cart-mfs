import { RootState } from "../../store"
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit"
import ArrayOfObjects from "../../types/ArrayOfObject"

interface statetypes {
  items: ArrayOfObjects[]
  viewItem: {
    isOpen: boolean
    [key: string]: unknown
  }
  addCartItems: ArrayOfObjects[]
  addCartMessage: {
    message: string
    open: boolean
  }
  viewCartOpen: boolean
  purchased: boolean
}

export const initialState: statetypes = {
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
    setGetInitialData: (state, { payload }: PayloadAction<ArrayOfObjects[]>) => {
      state.items = payload
    },
    setViewItemDetails: (state, { payload }: PayloadAction<ArrayOfObjects>) => {
      const toggle = Object.keys(payload).length === 0 ? false : true

      if (toggle) {
        state.viewItem = {
          ...state.viewItem,
          isOpen: true,
          ...payload
        }
      } else {
        state.viewItem = {
          isOpen: !state.viewItem.isOpen
        }
      }
    },
    setAddTuCartItems: (
      state,
      { payload }: PayloadAction<ArrayOfObjects | boolean>
    ) => {
      const newArray = [...state.addCartItems]

      if (typeof payload === "object") {
        state.addCartItems = [...newArray, { ...payload, quantity: 1 }]
      }

      state.addCartMessage = {
        ...state.addCartMessage,
        message: "Sucessfully Added To Cart",
        open: typeof payload === "object" ? true : false
      }
    },
    setViewCartItems: (state, { payload }: PayloadAction<boolean>) => {
      state.viewCartOpen = payload
    },
    setQuantityValue: (state, { payload }: PayloadAction<ArrayOfObjects[]>) => {
      state.addCartItems = payload
    },
    setRemoveItemValue: (state, { payload }: PayloadAction<ArrayOfObjects[]>) => {
      state.addCartItems = payload
    },
    setIsCheckout: (state, { payload }: PayloadAction<boolean>) => {
      state.viewCartOpen = false
      state.purchased = payload
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

export const ShopCartReducer = ShopCartSlice.reducer

export const shopSelector = (state: RootState) => state.ShopCartReducer
