import * as React from "react";
import IarrayOfObjects from "../../types/ArrayOfObject";
declare type Props = {
    item: IarrayOfObjects;
    handleCloseItem?: (e: React.MouseEvent<any>) => void;
    handleAddTuCart: (data: IarrayOfObjects) => void;
    handleCheckoutCart: (data: IarrayOfObjects) => void;
};
export default function MediaCard(props: Props): JSX.Element;
export {};
