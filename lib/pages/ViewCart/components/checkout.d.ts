/// <reference types="react" />
declare type Tprops = {
    subTotal: number | string;
    shippingFee: number | string;
    total: number | string;
    handleCheckoutExit: (data: boolean) => void;
    itemCounts: number | string;
};
declare const Checkout: ({ subTotal, shippingFee, total, handleCheckoutExit, itemCounts }: Tprops) => JSX.Element;
export default Checkout;
