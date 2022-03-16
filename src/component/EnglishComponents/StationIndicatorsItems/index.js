import React, { useState } from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

//redux
import { useSelector } from "react-redux";

/**
 * @author
 * @function StationIndicatorItems
 **/

const StationIndicatorItems = (props) => {
  const classes = useStyles();
  const [iStart, setIStart] = useState("");
  const [iOne, setIOne] = useState("");
  const [iTwo, setITwo] = useState("");
  const [iThree, setIThree] = useState("");
  const [iFour, setIFour] = useState("");
  const [ifinish, setIFinish] = useState("");

  const {
    startIndicator,
    indicatorOne,
    indicatorTwo,
    indicatorThree,
    indicatorFour,
    finishIndicator,

    startStation,
    stationOne,
    stationTwo,
    stationThree,
    stationFour,
    finishStation,
  } = useSelector((state) => ({
    startIndicator: state.UserReducer.startIndicator,
    indicatorOne: state.UserReducer.indicatorOne,
    indicatorTwo: state.UserReducer.indicatorTwo,
    indicatorThree: state.UserReducer.indicatorThree,
    indicatorFour: state.UserReducer.indicatorFour,
    finishIndicator: state.UserReducer.finishIndicator,

    startStation: state.UserReducer.startStation,
    stationOne: state.UserReducer.stationOne,
    stationTwo: state.UserReducer.stationTwo,
    stationThree: state.UserReducer.stationThree,
    stationFour: state.UserReducer.stationFour,
    finishStation: state.UserReducer.finishStation,
  }));

  React.useEffect(() => {
    if (
      startStation === true &&
      stationOne === false &&
      stationTwo === false &&
      stationThree === false &&
      stationFour === false &&
      finishStation === false
    ) {
      setIStart("#FFCD36");
    } else if (
      startStation == true &&
      stationOne === true &&
      stationTwo === false &&
      stationThree === false &&
      stationFour === false &&
      finishStation === false
    ) {
      setIStart("");
      setIOne("#FFCD36");
    } else if (
      startStation == true &&
      stationOne === true &&
      stationTwo === true &&
      stationThree === false &&
      stationFour === false &&
      finishStation === false
    ) {
      setIStart("");
      setIOne("");
      setITwo("#FFCD36");
    } else if (
      startStation == true &&
      stationOne === true &&
      stationTwo === true &&
      stationThree === true &&
      stationFour === false &&
      finishStation === false
    ) {
      setIStart("");
      setIOne("");
      setITwo("");
      setIThree("#FFCD36");
    } else if (
      startStation == true &&
      stationOne === true &&
      stationTwo === true &&
      stationThree === true &&
      stationFour === true &&
      finishStation === false
    ) {
      setIStart("");
      setIOne("");
      setITwo("");
      setIThree("");
      setIFour("#FFCD36");
    } else if (
      startStation == true &&
      stationOne === true &&
      stationTwo === true &&
      stationThree === true &&
      stationFour === true &&
      finishStation === true
    ) {
      setIStart("");
      setIOne("");
      setITwo("");
      setIThree("");
      setIFour("");
      setIFinish("#FFCD36");
    }
  }, [
    startStation,
    stationOne,
    stationTwo,
    stationThree,
    stationFour,
    finishStation,
  ]);

  const indicators = [
    { title: "Start", value: startIndicator },
    { title: "Station 1", value: indicatorOne },
    { title: "Station 2", value: indicatorTwo },
    { title: "Station 3", value: indicatorThree },
    { title: "Station 4", value: indicatorFour },
    { title: "Finish", value: finishIndicator },
  ];

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12} className={classes.topHeadContainer}>
        <Typography variant="h4" className={classes.title}>
          RUNNER PER STATION
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.indicatorsContainer}>
        {indicators.map((i,index) => {
          return (
            <div className={classes.contain}>
              <div
                className={classes.indicator}
                style={{
                  backgroundColor:
                    index === 0
                      ? iStart
                      : index === 1
                      ? iOne
                      : index === 2
                      ? iTwo
                      : index === 3
                      ? iThree
                      : index === 4
                      ? iFour
                      : index === 5
                      ? ifinish
                      : "",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontWeight: "bold",
                    fontSize: 22,
                    color: "white",
                  }}
                >
                  {i.value ? i.value : 0}
                </span>
              </div>
              <Typography variant="span" className={classes.subHead}>
                {i.title}
              </Typography>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default StationIndicatorItems;
