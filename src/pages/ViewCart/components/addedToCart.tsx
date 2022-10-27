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
  handleQuantity: (action: string, id: unknown) => void
  handleCloseAddToCart: (data: boolean) => void
  handleRemoveCartItems: (data: string | number) => void
}

const AddedToCart = ({
  cartItemList,
  handleQuantity,
  handleCloseAddToCart,
  handleRemoveCartItems
}: Props) => {
  console.log("cartItemList", cartItemList)

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
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Items</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left" sx={{ width: "100px" }}>
                  Total Price
                </TableCell>
                <TableCell align="left" sx={{ width: "100px" }}></TableCell>
              </TableRow>
            </TableHead>
            {cartItemList.length > 0 ? (
              <TableBody>
                {cartItemList.map((item: ArrayOfObjects) => (
                  <TableRow
                    key={`${item.title}`}
                    className="mb-10"
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 }
                    }}
                  >
                    <TableCell>
                      <Stack
                        direction="row"
                        alignItems={"center"}
                        sx={{ gap: "1em" }}
                      >
                        <AddIcon
                          onClick={() =>
                            handleQuantity("add", safeAccess(item, ["id"]))
                          }
                          sx={{ cursor: "pointer", "&:hover": { opacity: 0.1 } }}
                        />
                        <span>{safeAccess(item, ["quantity"])}</span>

                        <RemoveIcon
                          onClick={() =>
                            handleQuantity("minus", safeAccess(item, ["id"]))
                          }
                          sx={{ cursor: "pointer", "&:hover": { opacity: 0.1 } }}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <img
                        style={{
                          width: "50px",
                          objectFit: "cover",
                          cursor: "pointer"
                        }}
                        src={`${item.image}?w=8&h=8&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=8&h=8&fit=crop&auto=format&dpr=2`}
                        alt={`${item.title}`}
                        loading="lazy"
                      />
                    </TableCell>
                    <TableCell align="left">{`${item.title}`}</TableCell>
                    <TableCell align="left">&#8369;{`${item.price}`}</TableCell>
                    <TableCell align="left">
                      &#8369;
                      {`${(
                        safeAccess(item, ["price"]) * safeAccess(item, ["quantity"])
                      ).toFixed(2)}`}
                    </TableCell>
                    <TableCell align="left">
                      <CancelIcon
                        sx={{ cursor: "pointer", color: "red" }}
                        onClick={() =>
                          handleRemoveCartItems(safeAccess(item, ["id"]))
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
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
