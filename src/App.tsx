import ShoppingCart from "./pages"
import { Provider } from "react-redux"
import { store } from "../src/store"
import IdataIN from "../src/types/dataIn"
import IdataLoad from "../src/types/dataLoad"
import IdataOut from "../src/types/dataOut"

export interface DataProps {
  dataIn?: IdataIN
  dataLoad?: IdataLoad
  dataOut?: IdataOut
}

export default function ShoppingCartIndex({ dataIn, dataLoad, dataOut }: DataProps) {
  return (
    <Provider store={store}>
      <ShoppingCart dataLoad={dataLoad} dataIn={dataIn} dataOut={dataOut} />
    </Provider>
  )
}
