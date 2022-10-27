import Box from "@mui/material/Box"
import ItemList from "../../components/ItemList"
import ViewModel from "./ViewModel"
import safeAccess from "../../utils/safeAccess"
import CardItems from "../../components/cardItems"
import DialogBox from "../../components/dialogs"
import SnackBarMessage from "../../components/snackBar"

type Props = {}

const mainWindow = <T extends object>(props: Props) => {
  const {
    ItemsSelector,
    handleAddTuCart,
    HandleViewItemCLick,
    handleCloseItem,
    handleCheckoutCart
  } = ViewModel()

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto"
        }}
      >
        <ItemList
          items={safeAccess(ItemsSelector, ["items"])}
          onClickValue={HandleViewItemCLick}
        />
      </Box>
      <DialogBox open={safeAccess(ItemsSelector, ["viewItem", "isOpen"])}>
        <CardItems
          item={safeAccess(ItemsSelector, ["viewItem"])}
          handleCloseItem={handleCloseItem}
          handleAddTuCart={handleAddTuCart}
          handleCheckoutCart={handleCheckoutCart}
        />
      </DialogBox>
      <SnackBarMessage
        open={safeAccess(ItemsSelector, ["addCartMessage", "open"])}
        message={safeAccess(ItemsSelector, ["addCartMessage", "message"])}
        handleClose={handleAddTuCart}
      />
    </>
  )
}

export default mainWindow
