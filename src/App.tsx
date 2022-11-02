import ShoppingCart from "./pages"
import { Provider } from "react-redux"
import { store } from "../src/store"
import DataIN from "../src/types/dataIn"
import DataLoad from "../src/types/dataLoad"
import DataOut from "../src/types/dataOut"

type DataProps = {
  dataIn?: DataIN
  dataLoad?: DataLoad
  dataOut: DataOut
}

export default function ShoppingCartIndex({ dataIn, dataLoad, dataOut }: DataProps) {
  return (
    <Provider store={store}>
      <ShoppingCart dataIn={dataIn} dataLoad={dataLoad} dataOut={dataOut} />
    </Provider>
  )
}
