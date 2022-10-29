import Box from "@mui/material/Box"
import ItemList from "../../components/ItemList"
import ArrayOfObjects from "../../types/ArrayOfObject"
import CardItems from "../../components/cardItems"
import DialogBox from "../../components/dialogs"
import SnackBarMessage from "../../components/snackBar"
import { itemListHeader } from "../../types/dataIn"

type Props = {
  headers: itemListHeader[]
  items: ArrayOfObjects[]
  openCardItems: boolean
  handleViewItemCLick: (item: ArrayOfObjects) => void
  cardItems: ArrayOfObjects
  handleCloseItem?: (e: React.MouseEvent<any>) => void
  handleAddTuCart: (data: ArrayOfObjects | boolean) => void
  handleCheckoutCart: (data: ArrayOfObjects) => void
}

const mainWindow = ({
  headers,
  items,
  openCardItems,
  handleViewItemCLick,
  cardItems,
  handleCloseItem,
  handleAddTuCart,
  handleCheckoutCart
}: Props) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto"
        }}
      >
        <ItemList
          headers={headers}
          items={items}
          onClickValue={handleViewItemCLick}
        />
      </Box>
      <DialogBox open={openCardItems}>
        <CardItems
          item={cardItems}
          handleCloseItem={handleCloseItem}
          handleAddTuCart={handleAddTuCart}
          handleCheckoutCart={handleCheckoutCart}
        />
      </DialogBox>
    </>
  )
}

export default mainWindow
