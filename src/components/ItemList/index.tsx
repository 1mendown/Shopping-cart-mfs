import * as React from "react"
import { Grid, Paper, Typography, Stack } from "@mui/material"
import ArrayOfObjects from "../../types/ArrayOfObject"
import safeAccess from "../../utils/safeAccess"
import { itemListHeader } from "../../types/dataIn"
interface Props {
  items: ArrayOfObjects[]
  onClickValue: (item: ArrayOfObjects) => void
  headers: itemListHeader[]
}

export default function ItemList(props: Props) {
  const { items, onClickValue, headers } = props

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
          <Grid item xs={12} md={6} lg={3} key={`${item.title}`}>
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
              {headers.map((headerItems: { [key: string]: any }) => {
                return (
                  <div className={headerItems["className"]}>
                    {headerItems.hasImage ? (
                      headerItems.imageComponent(
                        safeAccess(item, [`${headerItems["accessor"]}`])
                      )
                    ) : headerItems.nestedObj ? (
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ fontSize: "16px" }}
                      >
                        <span className="flex gap-[0.5em]">
                          {headerItems["withIcons"] && headerItems["withIcons"]}
                          {safeAccess(item, headerItems["accessor"])}
                        </span>
                      </Typography>
                    ) : (
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ fontSize: "16px" }}
                        className={headerItems["className"]}
                      >
                        {headerItems["htmlSign"] && headerItems["htmlSign"]}
                        {safeAccess(item, [`${headerItems["accessor"]}`])}
                      </Typography>
                    )}
                  </div>
                )
              })}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
