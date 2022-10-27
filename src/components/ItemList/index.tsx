import { Grid, Paper, Typography, Stack } from "@mui/material"
import GradeIcon from "@mui/icons-material/Grade"
import InventoryIcon from "@mui/icons-material/Inventory"
import ArrayOfObjects from "../../types/ArrayOfObject"
import safeAccess from "../../utils/safeAccess"

interface Props {
  items: ArrayOfObjects[]
  onClickValue: (item: ArrayOfObjects) => void
}

export default function ItemList(props: Props) {
  const { items, onClickValue } = props

  const HandleClick = (item: ArrayOfObjects) => {
    onClickValue(item)
  }

  return (
    <Paper>
      <Grid
        container
        spacing={6}
        sx={{ overflow: "auto", height: "80vh", marginTop: "3em" }}
      >
        {items.map((item: ArrayOfObjects) => (
          <Grid item xs={12} md={6} lg={3}>
            <Stack
              onClick={() => HandleClick(item)}
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: "300px",
                height: "100%",
                rowGap: "1em",
                cursor: "pointer"
              }}
              component={Paper}
            >
              <div>
                <img
                  onClick={() => HandleClick(item)}
                  style={{
                    width: "100px",
                    objectFit: "cover",
                    cursor: "pointer"
                  }}
                  src={`${item.image}?w=8&h=8&fit=crop&auto=format`}
                  srcSet={`${item.image}?w=8&h=8&fit=crop&auto=format&dpr=2`}
                  alt={`${item.title}`}
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontSize: "16px" }}
                >{`${item.title}`}</Typography>
              </div>
              <div className="flex gap-x-12">
                <span className="flex">
                  <GradeIcon />
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontSize: "16px" }}
                  >{`${safeAccess(item, ["rating", "rate"])}`}</Typography>
                </span>
                <span className="flex">
                  <InventoryIcon />
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontSize: "16px" }}
                  >{`${safeAccess(item, ["rating", "count"])}`}</Typography>
                </span>
              </div>
              <div className="flex">
                &#8369;
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontSize: "16px" }}
                >{`${item.price}`}</Typography>
              </div>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
