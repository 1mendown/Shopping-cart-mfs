import * as React from "react"
import Card from "@mui/material/Card"
import CloseIcon from "@mui/icons-material/Close"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import GradeIcon from "@mui/icons-material/Grade"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import safeAccess from "../../utils/safeAccess"

import IarrayOfObjects from "../../types/ArrayOfObject"

type Props = {
  item: IarrayOfObjects
  handleCloseItem?: (e: React.MouseEvent<any>) => void
  handleAddTuCart: (data: IarrayOfObjects) => void
  handleCheckoutCart: (data: IarrayOfObjects) => void
}

export default function MediaCard(props: Props) {
  const { handleCloseItem, item, handleAddTuCart, handleCheckoutCart } = props

  return (
    <Card
      className="text-ellipsis"
      sx={{
        width: 400,
        height: "auto",
        padding: "1em",
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      <CloseIcon
        onClick={handleCloseItem}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          color: "red",
          cursor: "pointer"
        }}
      />
      <span className="align-center flex w-screen justify-center">
        <img
          style={{
            width: "200px",
            objectFit: "cover",
            cursor: "pointer"
          }}
          src={`${safeAccess(item, ["image"])}?w=8&h=8&fit=crop&auto=format`}
          srcSet={`${safeAccess(item, [
            "image"
          ])}?w=8&h=8&fit=crop&auto=format&dpr=2`}
          alt={`${safeAccess(item, ["title"])}`}
          loading="lazy"
        />
      </span>
      <CardContent className="align-center flex flex-col justify-between gap-[0.5em]">
        <Typography gutterBottom variant="h5" component="div">
          {safeAccess(item, ["title"])}
        </Typography>

        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ overflow: "auto", fontSize: "16px", height: "100px" }}
        >
          {safeAccess(item, ["description"])}
        </Typography>

        <span>
          <GradeIcon />
          {safeAccess(item, ["rating", "rate"])}
        </span>

        <span className="ml-2">
          &#8369;
          {safeAccess(item, ["price"])}
        </span>
      </CardContent>
      <CardActions className="gap-[2em] text-center">
        <Button
          onClick={() => handleCheckoutCart(item)}
          variant="contained"
          sx={{ fontWeight: "900", backgroundColor: "#14C38E" }}
        >
          CHECKOUT
        </Button>
        <Button
          onClick={() => handleAddTuCart(item)}
          variant="contained"
          sx={{ fontWeight: "900", backgroundColor: "#FF5B00" }}
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  )
}
