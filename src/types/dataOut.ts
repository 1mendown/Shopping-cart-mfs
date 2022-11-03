export default interface IdataOut {
  snackBarMessage: (value: boolean) => JSX.Element
  addToCartSnackBarMessage: (
    openSnackBar: boolean,
    snackBarMessage: string,
    handleAddTuCart: (data: boolean) => void
  ) => JSX.Element
}
