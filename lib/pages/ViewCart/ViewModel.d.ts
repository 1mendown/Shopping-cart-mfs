declare const ViewModel: () => {
    cartItemsSelector: import("../../store/featuresSlice/shopCartSlice").IshopCartStateTypes;
    cartItems: never[];
    itemCounts: number;
    handleOpenCart: (data: boolean) => void;
    handleQuantity: (data: string, id: unknown) => void;
    handleRemoveCartItems: (data: string | number) => void;
    subTotal: string;
    shippingFee: string;
    total: string;
    handleCheckoutExit: (data: boolean) => void;
    checkout: boolean;
};
export default ViewModel;
