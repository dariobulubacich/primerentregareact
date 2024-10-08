import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export const ItemListContainer = ({ saludo }) => {
  return (
    <div>
      <Grid container={true}>
        <Grid size={{ xs: 12 }}>
          <Typography style={{ margin: "100px" }} align="center" variant="h3">
            {saludo}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
