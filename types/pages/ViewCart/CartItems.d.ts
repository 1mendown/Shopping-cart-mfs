/// <reference types="react" />
import IarrayOfObjects from "../../types/ArrayOfObject";
declare type Tprops = {
    headers?: {
        [key: string]: string;
    }[];
    snackBarMessage: (value: boolean) => JSX.Element;
    itemCounts: number | string;
    handleOpenCart: (data: boolean) => void;
    open: boolean;
    cartItems: IarrayOfObjects[];
    handleQuantity: (action: string, id: unknown) => void;
    handleRemoveCartItems: (data: string | number) => void;
    subTotal: number | string;
    shippingFee: number | string;
    total: number | string;
    handleCheckoutExit: (data: boolean) => void;
    checkout: boolean;
};
declare const CartItems: (props: Tprops) => JSX.Element;
export default CartItems;
