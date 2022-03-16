import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Carousel from "./carousel";

/**
 * @author
 * @function TopWinner
 **/

const TopWinner = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12} className={classes.topHeadContainer}>
        <Typography variant="h4" className={classes.title}>
          TOP 5 WINNERS
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.carouselContainer}>
        <Carousel />
      </Grid>
    </Grid>
  );
};

export default TopWinner;
