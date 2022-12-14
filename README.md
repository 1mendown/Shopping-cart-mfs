# Bootcamp Sample of Simple Shopping Cart

Bootcamp Sample of Simple Shopping Cart

[![repository](https://img.shields.io/badge/repo-gitlab-orange)](https://github.com/1mendown/Shopping-cart-mfs/)

## Mini App

- Bootcamp Sample of Simple Shopping Cart - [![status](https://img.shields.io/badge/DONE-green)](#)

For installation

```sh
npm install shopping-cart-mfs
```

## Usage

```sh
import { ShoppingCart } from "shopping-cart-mfs"

```

additional config kindly add these to your react-app-env.d.ts to remove type declaration error

<img src='/src/assets/reactEnv.png'/>

and if your are using React 18 kindly downgrade your react and react-dom to 17.0.2 and tweak your index.ts to look like this.

<img src='/src/assets/index.png'/>

## Types

```sh
{
dataLoad:{
    api: {
    [key: string]: any    <------- any axios api calls or created axios instance
  }
}
dataIn:{
   addToCartHeader: {
    id: string         // required
    header: string     // required
    accessor: string | { [key: string]: unknown } // required
    withComputation?: { [key: string]: unknown } | boolean | string // required
    hasComponent?: boolean  // optional if need other components
    hasImage?: true  // optional if the components is image
    imageComponent?: any // optional
    sx?: CSSProperties | null // image styles properties
  }[]
  itemListHeader: {
    id: string              // required
    nestedObj?: boolean     // optional if you need to access deeper objects
    mainObj?: string        // optional main object before to access deeper object values
    htmlSign?: JSX.Element  // optional only html signs if needed
    withIcons?: JSX.Element // optional if needed to add icons
    accessor: string | Array<string> // required because it is need to access object value
    imageComponent?: any    // optional if need image component
    hasImage?: boolean      // optional boolean only if has image component
    className?: string      // optional className for styling
  }[]
}
dataOut:{
  snackBarMessage: (value: boolean) => JSX.Element // required you can use any html elements or materil ui
  addToCartSnackBarMessage: (                      // required you can use any html elements or materil ui
    openSnackBar: boolean,
    snackBarMessage: string,
    handleAddTuCart: (data: boolean) => void
  ) => JSX.Element
}

}
```

## Example

```jsx
import { ShoppingCart } from "shopping-cart-mfs"
import GradeIcon from "@mui/icons-material/Grade";
import InventoryIcon from "@mui/icons-material/Inventory";
import DialogBox from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios"

export default function App() {
  return (
    <ShoppingCart
      dataLoad={{
        api: {
          getAll: getAll: axios.get("https://fakestoreapi.com/products")

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
  )
}

```

## Sample Return value from GetAll Api

<img src='/src/assets/returnValue.png'/>

## Demo

![Demo](https://gitlab.com/quality-developers/shopping-cart/-/blob/main/sampleDemo.gif)

<img src='/src/assets/shoppingCartDemo.gif'/>

## Peer Dependecies

```sh
"node":"v16.14.0"
"react": "^17.0.2",
"react-dom": "^17.0.2"
```
