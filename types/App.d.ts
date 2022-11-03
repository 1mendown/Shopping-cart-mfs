/// <reference types="react" />
import IdataIN from "../src/types/dataIn";
import IdataLoad from "../src/types/dataLoad";
import IdataOut from "../src/types/dataOut";
export interface DataProps {
    dataIn?: IdataIN;
    dataLoad?: IdataLoad;
    dataOut?: IdataOut;
}
declare const ShoppingCart: ({ dataIn, dataLoad, dataOut }: DataProps) => JSX.Element;
export default ShoppingCart;
