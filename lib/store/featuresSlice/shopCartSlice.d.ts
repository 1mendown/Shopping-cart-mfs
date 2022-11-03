import { RootState } from "../../store";
import { PayloadAction } from "@reduxjs/toolkit";
import IarrayOfObjects from "../../types/ArrayOfObject";
export interface IshopCartStateTypes {
    items: IarrayOfObjects[];
    viewItem: {
        isOpen: boolean;
        [key: string]: unknown;
    };
    addCartItems: IarrayOfObjects[];
    addCartMessage: {
        message: string;
        open: boolean;
    };
    viewCartOpen: boolean;
    purchased: boolean;
}
export declare const initialState: IshopCartStateTypes;
export declare const ShopCartSlice: import("@reduxjs/toolkit").Slice<IshopCartStateTypes, {
    setGetInitialData: (state: import("immer/dist/internal").WritableDraft<IshopCartStateTypes>, { payload }: PayloadAction<IarrayOfObjects[]>) => {
        items: IarrayOfObjects[];
        viewItem: import("immer/dist/internal").WritableDraft<{
            [key: string]: unknown;
            isOpen: boolean;
        }>;
        addCartItems: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        addCartMessage: import("immer/dist/internal").WritableDraft<{
            message: string;
            open: boolean;
        }>;
        viewCartOpen: boolean;
        purchased: boolean;
    };
    setViewItemDetails: (state: import("immer/dist/internal").WritableDraft<IshopCartStateTypes>, { payload }: PayloadAction<IarrayOfObjects>) => {
        viewItem: {
            isOpen: boolean;
        };
        items: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        addCartItems: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        addCartMessage: import("immer/dist/internal").WritableDraft<{
            message: string;
            open: boolean;
        }>;
        viewCartOpen: boolean;
        purchased: boolean;
    };
    setAddTuCartItems: (state: import("immer/dist/internal").WritableDraft<IshopCartStateTypes>, { payload }: PayloadAction<IarrayOfObjects | boolean>) => {
        addCartItems: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        items: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        viewItem: import("immer/dist/internal").WritableDraft<{
            [key: string]: unknown;
            isOpen: boolean;
        }>;
        addCartMessage: import("immer/dist/internal").WritableDraft<{
            message: string;
            open: boolean;
        }>;
        viewCartOpen: boolean;
        purchased: boolean;
    };
    setViewCartItems: (state: import("immer/dist/internal").WritableDraft<IshopCartStateTypes>, { payload }: PayloadAction<boolean>) => {
        viewCartOpen: boolean;
        items: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        viewItem: import("immer/dist/internal").WritableDraft<{
            [key: string]: unknown;
            isOpen: boolean;
        }>;
        addCartItems: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        addCartMessage: import("immer/dist/internal").WritableDraft<{
            message: string;
            open: boolean;
        }>;
        purchased: boolean;
    };
    setQuantityValue: (state: import("immer/dist/internal").WritableDraft<IshopCartStateTypes>, { payload }: PayloadAction<IarrayOfObjects[]>) => {
        addCartItems: IarrayOfObjects[];
        items: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        viewItem: import("immer/dist/internal").WritableDraft<{
            [key: string]: unknown;
            isOpen: boolean;
        }>;
        addCartMessage: import("immer/dist/internal").WritableDraft<{
            message: string;
            open: boolean;
        }>;
        viewCartOpen: boolean;
        purchased: boolean;
    };
    setRemoveItemValue: (state: import("immer/dist/internal").WritableDraft<IshopCartStateTypes>, { payload }: PayloadAction<IarrayOfObjects[]>) => {
        addCartItems: IarrayOfObjects[];
        items: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        viewItem: import("immer/dist/internal").WritableDraft<{
            [key: string]: unknown;
            isOpen: boolean;
        }>;
        addCartMessage: import("immer/dist/internal").WritableDraft<{
            message: string;
            open: boolean;
        }>;
        viewCartOpen: boolean;
        purchased: boolean;
    };
    setIsCheckout: (state: import("immer/dist/internal").WritableDraft<IshopCartStateTypes>, { payload }: PayloadAction<boolean>) => {
        viewCartOpen: false;
        purchased: boolean;
        items: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        viewItem: import("immer/dist/internal").WritableDraft<{
            [key: string]: unknown;
            isOpen: boolean;
        }>;
        addCartItems: import("immer/dist/internal").WritableDraft<IarrayOfObjects>[];
        addCartMessage: import("immer/dist/internal").WritableDraft<{
            message: string;
            open: boolean;
        }>;
    };
}, "ShopCart">;
export declare const setGetInitialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<IarrayOfObjects[], string>, setViewItemDetails: import("@reduxjs/toolkit").ActionCreatorWithPayload<IarrayOfObjects, string>, setAddTuCartItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean | IarrayOfObjects, string>, setViewCartItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setQuantityValue: import("@reduxjs/toolkit").ActionCreatorWithPayload<IarrayOfObjects[], string>, setRemoveItemValue: import("@reduxjs/toolkit").ActionCreatorWithPayload<IarrayOfObjects[], string>, setIsCheckout: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const setHandleQuantity: import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<string>;
export declare const setRemoveCartItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | number, string>;
export declare const shoppingCart: import("redux").Reducer<IshopCartStateTypes, import("redux").AnyAction>;
export declare const shopSelector: (state: RootState) => IshopCartStateTypes;
