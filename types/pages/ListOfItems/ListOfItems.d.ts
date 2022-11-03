/// <reference types="react" />
import IarrayOfObjects from "../../types/ArrayOfObject";
import { IitemListHeader } from "../../types/dataIn";
declare type Tprops = {
    headers: IitemListHeader[];
    items: IarrayOfObjects[];
    openCardItems: boolean;
    handleViewItemCLick: (item: IarrayOfObjects) => void;
    cardItems: IarrayOfObjects;
    handleCloseItem?: (e: React.MouseEvent<any>) => void;
    handleAddTuCart: (data: IarrayOfObjects | boolean) => void;
    handleCheckoutCart: (data: IarrayOfObjects) => void;
};
declare const mainWindow: ({ headers, items, openCardItems, handleViewItemCLick, cardItems, handleCloseItem, handleAddTuCart, handleCheckoutCart }: Tprops) => JSX.Element;
export default mainWindow;
