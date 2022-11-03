/// <reference types="react" />
import IarrayOfObjects from "../../../types/ArrayOfObject";
declare type Tprops = {
    cartItemList: IarrayOfObjects[];
    headers?: {
        [key: string]: string;
    }[];
    handleQuantity: (action: string, id: unknown) => void;
    handleCloseAddToCart: (data: boolean) => void;
    handleRemoveCartItems: (data: string | number) => void;
};
declare const AddedToCart: ({ cartItemList, handleQuantity, handleCloseAddToCart, handleRemoveCartItems, headers }: Tprops) => JSX.Element;
export default AddedToCart;
