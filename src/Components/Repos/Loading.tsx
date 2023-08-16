/**
 * Imports
 */
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

/**
 * Component
 */
export function Loading(): JSX.Element {
  return (
    <ListItem>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={8}>
          <Skeleton variant="text" animation="wave" height={"20px"} />
          <Skeleton variant="text" animation="wave" height={"20px"} />
        </Grid>
        <Grid
          container
          item
          xs={4}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Skeleton
            variant="text"
            animation="wave"
            width={"100%"}
            height={"50px"}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
}
