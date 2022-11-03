/// <reference types="react" />
import IarrayOfObjects from "../../types/ArrayOfObject";
import { IitemListHeader } from "../../types/dataIn";
interface Props {
    items: IarrayOfObjects[];
    onClickValue: (item: IarrayOfObjects) => void;
    headers: IitemListHeader[];
}
export default function ItemList(props: Props): JSX.Element;
export {};
