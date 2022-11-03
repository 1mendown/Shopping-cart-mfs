import ShoppingCart from "./pages"
import { Provider } from "react-redux"
import { store } from "../src/store"
import GradeIcon from "@mui/icons-material/Grade"
import InventoryIcon from "@mui/icons-material/Inventory"
import DialogBox from "../src/components/dialogs"
import Box from "@mui/material/Box"
import SnackBarMessage from "../src/components/snackBar"
// import { Products } from "../src/services"
import axios from "axios"

// import DataIN from "../src/types/dataIn"
// import DataLoad from "../src/types/dataLoad"
// import DataOut from "../src/types/dataOut"

// export interface DataProps {
//   dataIn?: DataIN
//   dataLoad?: DataLoad
//   dataOut?: DataOut
// }

// { dataIn, dataLoad, dataOut }: DataProps

export default function ShoppingCartIndex() {
  return (
    <Provider store={store}>
      <ShoppingCart
        dataLoad={{
          api: {
            getAll: axios.get("https://fakestoreapi.com/products")
          }
        }}
        dataIn={{
          itemListHeader: [
            {
              id: "id",
              accessor: "image",
              hasImage: true,
              imageComponent: (value: unknown) => {
                return (
                  <img
                    style={{
                      width: "100px",
                      objectFit: "cover",
                      cursor: "pointer"
                    }}
                    src={`${value}?w=8&h=8&fit=crop&auto=format`}
                    srcSet={`${value}?w=8&h=8&fit=crop&auto=format&dpr=2`}
                    alt={`${value}`}
                    loading="lazy"
                  />
                )
              }
            },
            { id: "id", accessor: "title", className: "text-center" },
            {
              id: "id",
              nestedObj: true,
              withIcons: <GradeIcon />,
              accessor: ["rating", "rate"],
              className: "flex gap-x-12"
            },
            {
              id: "id",
              nestedObj: true,
              withIcons: <InventoryIcon />,
              accessor: ["rating", "count"],
              className: "flex gap-x-12"
            },
            {
              id: "id",
              accessor: "price",
              htmlSign: <span>&#8369; </span>,
              className: "flex"
            }
          ],
          addToCartHeader: [
            {
              id: "id",
              header: "Quantity",
              accessor: "quantity",
              hasComponent: true
            },
            {
              id: "id",
              header: "Items",
              accessor: "image",
              hasImage: true,
              imageComponent: (value: unknown) => {
                return (
                  <img
                    style={{
                      width: "50px",
                      objectFit: "cover",
                      cursor: "pointer"
                    }}
                    src={`${value}?w=8&h=8&fit=crop&auto=format`}
                    srcSet={`${value}?w=8&h=8&fit=crop&auto=format&dpr=2`}
                    alt={`${value}`}
                    loading="lazy"
                  />
                )
              }
            },
            {
              id: "id",
              header: "Title",
              accessor: "title",
              sx: { width: "100px" }
            },
            {
              id: "id",
              header: "Price",
              accessor: "price"
            },
            {
              id: "id",
              header: "Total Price",
              accessor: { price: "price", quantity: "quantity" },
              withComputation: "multiply",
              sx: { width: "100px" }
            },
            {
              id: "id",
              header: "",
              accessor: "cancelIcon",
              sx: { width: "100px" }
            }
          ]
        }}
        dataOut={{
          snackBarMessage: (value: boolean) => {
            return (
              <DialogBox open={value}>
                <Box sx={{ padding: "2em" }}>THANKS FOR YOUR PURCHASE</Box>
              </DialogBox>
            )
          },
          addToCartSnackBarMessage: (
            openSnackBar: boolean,
            snackBarMessage: string,
            handleAddTuCart: (data: boolean) => void
          ) => {
            return (
              <SnackBarMessage
                open={openSnackBar}
                message={snackBarMessage}
                handleClose={handleAddTuCart}
              />
            )
          }
        }}
      />
    </Provider>
  )
}
