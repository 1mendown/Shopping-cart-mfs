import Box from "@mui/material/Box"
import ItemList from "../../components/ItemList"
import IarrayOfObjects from "../../types/ArrayOfObject"
import CardItems from "../../components/cardItems"
import DialogBox from "../../components/dialogs"
import { IitemListHeader } from "../../types/dataIn"

type Tprops = {
  headers: IitemListHeader[]
  items: IarrayOfObjects[]
  openCardItems: boolean
  handleViewItemCLick: (item: IarrayOfObjects) => void
  cardItems: IarrayOfObjects
  handleCloseItem?: (e: React.MouseEvent<any>) => void
  handleAddTuCart: (data: IarrayOfObjects | boolean) => void
  handleCheckoutCart: (data: IarrayOfObjects) => void
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
}: Tprops) => {
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
