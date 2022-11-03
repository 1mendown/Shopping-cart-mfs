/// <reference types="react" />
declare type Tprops = {
    itemCounts: number | string;
    handleOpenCart: (data: boolean) => void;
};
declare const CartCounts: ({ itemCounts, handleOpenCart }: Tprops) => JSX.Element;
export default CartCounts;
