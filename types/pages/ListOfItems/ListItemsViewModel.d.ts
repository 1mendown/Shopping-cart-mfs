import * as React from "react";
import IdataLoad from "../../types/dataLoad";
import IarrayOfObjects from "../../types/ArrayOfObject";
declare const ListItemsViewModel: (dataLoad?: IdataLoad) => {
    ItemsSelector: import("../../store/featuresSlice/shopCartSlice").IshopCartStateTypes;
    setGetInitialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<IarrayOfObjects[], string>;
    handleViewItemCLick: (item: IarrayOfObjects) => void;
    handleAddTuCart: (item: IarrayOfObjects | boolean) => void;
    handleCloseItem: (e: React.MouseEvent<any>) => void;
    handleCheckoutCart: (item: IarrayOfObjects) => void;
};
export default ListItemsViewModel;
