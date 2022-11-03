# Bootcamp Sample of Simple Shopping Cart

Bootcamp Sample of Simple Shopping Cart

[![repository](https://img.shields.io/badge/repo-gitlab-orange)](https://gitlab.com/quality-developers/shopping-cart)

## Mini App

- Bootcamp Sample of Simple Shopping Cart - [![status](https://img.shields.io/badge/DONE-green)](#)

For installation

```sh
npm install shopping-cart-mfs --registry http://miniapp.serino.com:4873/
```

## Usage

```sh
import { ShoppingCart } from "shopping-cart-mfs"
```

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
    id: string
    header: string
    accessor: string | { [key: string]: unknown }
    withComputation?: { [key: string]: unknown } | boolean | string
    hasComponent?: boolean
    hasImage?: true
    imageComponent?: any
    sx?: CSSProperties | null
  }[]
  itemListHeader: {
    id: string
    nestedObj?: boolean
    mainObj?: string
    htmlSign?: JSX.Element
    withIcons?: JSX.Element
    accessor: string | Array<string>
    imageComponent?: any
    hasImage?: boolean
    className?: string
  }[]
}
dataOut:{
  snackBarMessage: (value: boolean) => JSX.Element
  addToCartSnackBarMessage: (
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

export default function App() {
  return (
    <ShoppingCart
      dataLoad={{
        api: {
          getAll: Products.GeAll("products")
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

## Peer Dependecies

```sh
"react": "^17.0.2",
"react-dom": "^17.0.2"
```
