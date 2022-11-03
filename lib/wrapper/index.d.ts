/// <reference types="react" />
import IdataIN from "../types/dataIn";
import IdataLoad from "../types/dataLoad";
import IdataOut from "../types/dataOut";
export interface DataProps {
    dataIn?: IdataIN;
    dataLoad?: IdataLoad;
    dataOut?: IdataOut;
}
declare const ShoppingCart: ({ dataIn, dataLoad, dataOut }: DataProps) => JSX.Element;
export default ShoppingCart;
