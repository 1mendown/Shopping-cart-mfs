/// <reference types="react" />
import IdataIN from "../types/dataIn";
import IdataLoad from "../types/dataLoad";
import IdataOut from "../types/dataOut";
interface Iprops {
    dataIn?: IdataIN;
    dataLoad?: IdataLoad;
    dataOut?: IdataOut;
}
declare const ShoppingCartIndex: (props: Iprops) => JSX.Element;
export default ShoppingCartIndex;
