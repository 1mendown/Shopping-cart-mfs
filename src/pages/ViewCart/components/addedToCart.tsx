import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import ArrayOfObjects from "../../../types/ArrayOfObject"
import safeAccess from "../../../utils/safeAccess"
import Stack from "@mui/material/Stack"
import CloseIcon from "@mui/icons-material/Close"
import CancelIcon from "@mui/icons-material/Cancel"

type Props = {
  cartItemList: ArrayOfObjects[]
  headers?: { [key: string]: string }[]
  handleQuantity: (action: string, id: unknown) => void
  handleCloseAddToCart: (data: boolean) => void
  handleRemoveCartItems: (data: string | number) => void
}

const AddedToCart = ({
  cartItemList,
  handleQuantity,
  handleCloseAddToCart,
  handleRemoveCartItems,
  headers
}: Props) => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <h1 className="ml-4 font-black">CART ITEMS</h1>
          <CloseIcon
            onClick={() => handleCloseAddToCart(false)}
            sx={{
              float: "right",
              color: "red",
              margin: "0.5em",
              cursor: "pointer"
            }}
          />
        </Stack>

        <TableContainer
          component={Paper}
          sx={{ height: "400px", width: "100%", overflow: "auto" }}
        >
          <Table
            size="small"
            aria-label="a dense table"
            sx={{ position: "relative" }}
          >
            <TableHead
              sx={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                backgroundColor: "white"
              }}
            >
              <TableRow sx={{ fontWeight: 1000 }}>
                {headers?.map((items) => {
                  console.log('safeAccess(items, ["sx"])', safeAccess(items, ["sx"]))
                  return (
                    <TableCell
                      align="left"
                      sx={
                        safeAccess(items, ["sx"]) ? safeAccess(items, ["sx"]) : null
                      }
                      key={`${safeAccess(items, ["accessor"])} ${Math.random()}`}
                    >
                      {items["header"]}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            {cartItemList.length > 0 ? (
              <TableBody>
                <>
                  {cartItemList.map((bodyItem) => {
                    return (
                      <TableRow
                        className="mb-10"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 }
                        }}
                      >
                        {headers?.map((headerItems: any, id) => {
                          return (
                            <TableCell key={id}>
                              {headerItems.withComputation ? (
                                cartItemList
                                  .reduce(
                                    (
                                      sum: number,
                                      acc: { [key: string]: unknown }
                                    ) => {
                                      return (
                                        sum +
                                        safeAccess(acc, ["price"]) *
                                          safeAccess(acc, ["quantity"])
                                      )
                                    },
                                    0
                                  )
                                  .toFixed(2)
                              ) : headerItems.hasComponent ? (
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  sx={{ gap: "1em" }}
                                >
                                  <AddIcon
                                    onClick={() =>
                                      handleQuantity(
                                        "add",
                                        safeAccess(bodyItem, [
                                          `${headerItems["id"]}`
                                        ])
                                      )
                                    }
                                    sx={{
                                      cursor: "pointer",
                                      "&:hover": { opacity: 0.1 }
                                    }}
                                  />
                                  <span>
                                    {safeAccess(bodyItem, [
                                      `${headerItems["accessor"]}`
                                    ])}
                                  </span>

                                  <RemoveIcon
                                    onClick={() =>
                                      handleQuantity(
                                        "minus",
                                        safeAccess(bodyItem, [
                                          `${headerItems["id"]}`
                                        ])
                                      )
                                    }
                                    sx={{
                                      cursor: "pointer",
                                      "&:hover": { opacity: 0.1 }
                                    }}
                                  />
                                </Stack>
                              ) : headerItems.hasImage ? (
                                headerItems.imageComponent(
                                  safeAccess(bodyItem, [
                                    `${headerItems["accessor"]}`
                                  ])
                                )
                              ) : headerItems["accessor"] === "cancelIcon" ? (
                                <CancelIcon
                                  sx={{ cursor: "pointer", color: "red" }}
                                  onClick={() =>
                                    handleRemoveCartItems(
                                      safeAccess(bodyItem, [`${headerItems["id"]}`])
                                    )
                                  }
                                />
                              ) : (
                                safeAccess(bodyItem, [`${headerItems["accessor"]}`])
                              )}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
                </>
              </TableBody>
            ) : (
              <h1 className="absolute bottom-[-1] left-0 translate-y-[650%] translate-x-[340%]">
                NO ITEMS
              </h1>
            )}
          </Table>
        </TableContainer>
      </>
    </Box>
  )
}

export default AddedToCart
