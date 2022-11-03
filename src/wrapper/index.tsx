import ShoppingCartIndex from "../pages"
import { Provider } from "react-redux"
import { store } from "../store"
import IdataIN from "../types/dataIn"
import IdataLoad from "../types/dataLoad"
import IdataOut from "../types/dataOut"

export interface DataProps {
  dataIn?: IdataIN
  dataLoad?: IdataLoad
  dataOut?: IdataOut
}

const ShoppingCart = ({ dataIn, dataLoad, dataOut }: DataProps) => {
  return (
    <Provider store={store}>
      <ShoppingCartIndex dataLoad={dataLoad} dataIn={dataIn} dataOut={dataOut} />
    </Provider>
  )
}

export default ShoppingCart
