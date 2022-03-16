import React from "react";
import useStyles from "../styles";
import Grid from "@material-ui/core/Grid";

//import blocked images
import start from "../../../../assets/spanishStationCardDeactive/start.png";
import finish from "../../../../assets/spanishStationCardDeactive/finish.png";
import station1 from "../../../../assets/spanishStationCardDeactive/station 1.png";
import station2 from "../../../../assets/spanishStationCardDeactive/station 2.png";
import station3 from "../../../../assets/spanishStationCardDeactive/station 3.png";
import station4 from "../../../../assets/spanishStationCardDeactive/station 4.png";

//import active images
import startActive from "../../../../assets/spanishStationCardsActive/start.png";
import finishActive from "../../../../assets/spanishStationCardsActive/finish.png";
import stationActive1 from "../../../../assets/spanishStationCardsActive/station 1.png";
import stationActive2 from "../../../../assets/spanishStationCardsActive/station 2.png";
import stationActive3 from "../../../../assets/spanishStationCardsActive/station 3.png";
import stationActive4 from "../../../../assets/spanishStationCardsActive/station 4.png";

//redux
import { useSelector } from "react-redux";

//toaster
import { toast } from "react-toastify";

//
import TronHelper from "../../../../utils/TronHelper";

//import buy station functions
import { buyStartStation, buyAllStations } from "../../../../userDataFunctions";

//import environment
import { environment } from "../../../../environment";

//
import Button from "@material-ui/core/Button";

/**
 * @author
 * @function MobileIndiCards
 **/

const MobileIndiCards = (props) => {
  const classes = useStyles();
  const [tronWeb, setTronWeb] = React.useState();

  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  const {
    startStation,
    stationOne,
    stationTwo,
    stationThree,
    stationFour,
    finishStation,
    startIndicator,
    indicatorOne,
    indicatorTwo,
    indicatorThree,
    indicatorFour,
    finishIndicator,
    randomAuth,
    paymentForStart,
    paymentForOne,
    paymentForTwo,
    paymentForThree,
    paymentForFour,
    paymentForFive,
  } = useSelector((state) => ({
    startStation: state.UserReducer.startStation,
    stationOne: state.UserReducer.stationOne,
    stationTwo: state.UserReducer.stationTwo,
    stationThree: state.UserReducer.stationThree,
    stationFour: state.UserReducer.stationFour,
    finishStation: state.UserReducer.finishStation,
    startIndicator: state.UserReducer.startIndicator,
    indicatorOne: state.UserReducer.indicatorOne,
    indicatorTwo: state.UserReducer.indicatorTwo,
    indicatorThree: state.UserReducer.indicatorThree,
    indicatorFour: state.UserReducer.indicatorFour,
    finishIndicator: state.UserReducer.finishIndicator,
    randomAuth: state.UserReducer.randomAuth,
    paymentForStart: state.UserReducer.paymentForStart,
    paymentForOne: state.UserReducer.paymentForOne,
    paymentForTwo: state.UserReducer.paymentForTwo,
    paymentForThree: state.UserReducer.paymentForThree,
    paymentForFour: state.UserReducer.paymentForFour,
    paymentForFive: state.UserReducer.paymentForFive,
  }));

  const buyStationOne = async () => {
    if (tronWeb) {
      let getContract = await tronWeb
        .contract()
        .at(environment.contractAddress);
      if (getContract) {
        buyStartStation(
          getContract,
          tronWeb.defaultAddress.base58,
          150,
          tronWeb
        );
      }
    }
  };

  const buyStationFunction = async (uint, amount) => {
    if (tronWeb) {
      let getContract = await tronWeb
        .contract()
        .at(environment.contractAddress);
      if (getContract) {
        buyAllStations(
          getContract,
          tronWeb.defaultAddress.base58,
          uint,
          amount,
          tronWeb
        );
      }
    }
  };

  return (
    <Grid container className={classes.main}>
      <Grid item xs={12}>
        <div style={{ position: "relative", textAlign: "center" }}>
          <div className={classes.mainCont}>
            {startStation ? (
              <img src={startActive} className={classes.cards} />
            ) : (
              <img
                src={start}
                className={classes.cards}
                title="click on the image to active it"
                style={{ cursor: "pointer", marginBottom: 10 }}
              />
            )}
            <div className={classes.indicator}>
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
                {startIndicator ? startIndicator : 0}
              </span>
            </div>
          </div>
          {startStation ? (
            <div style={{ marginTop: 10, marginBottom: 10 }} />
          ) : (
            <Button
              // disabled={paymentForStart >= 3 ? false : true}
              variant="contained"
              color="primary"
              className={classes.buyButtonStyling2}
              onClick={buyStationOne}
            >
              COMPRA/BUY
            </Button>
          )}
        </div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <div className={classes.mainCont}>
            {stationOne ? (
              <img src={stationActive1} className={classes.cards} />
            ) : (
              <img
                src={station1}
                className={classes.cards}
                style={{ cursor: "pointer", marginBottom: 10 }}
                title="click on the image to active it"
              />
            )}
            <div className={classes.indicator}>
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
                {indicatorOne ? indicatorOne : 0}
              </span>
            </div>
          </div>
          {stationOne ? (
            <div style={{ marginTop: 10, marginBottom: 10 }} />
          ) : (
            <Button
              onClick={() => buyStationFunction(1, 140)}
              disabled={startStation === true ? false : true}
              variant="contained"
              color="primary"
              className={classes.buyButtonStylingSpan2}
            >
              COMPRA/BUY
            </Button>
          )}
        </div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <div className={classes.mainCont}>
            {stationTwo ? (
              <img src={stationActive2} className={classes.cards} />
            ) : (
              <img
                src={station2}
                className={classes.cards}
                style={{ cursor: "pointer", marginBottom: 10 }}
                title="click on the image to active it"
              />
            )}
            <div className={classes.indicator}>
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
                {indicatorTwo ? indicatorTwo : 0}
              </span>
            </div>
          </div>
          {stationTwo ? (
            <div style={{ marginTop: 10, marginBottom: 10 }} />
          ) : (
            <Button
              disabled={
                startStation === true && stationOne === true ? false : true
              }
              onClick={() => buyStationFunction(2, 280)}
              variant="contained"
              color="primary"
              className={classes.buyButtonStylingSpan2}
            >
              COMPRA/BUY
            </Button>
          )}
        </div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <div className={classes.mainCont}>
            {stationThree ? (
              <img src={stationActive3} className={classes.cards} />
            ) : (
              <img
                src={station3}
                className={classes.cards}
                style={{ cursor: "pointer", marginBottom: 10 }}
                title="click on the image to active it"
              />
            )}
            <div className={classes.indicator}>
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
                {indicatorThree ? indicatorThree : 0}
              </span>
            </div>
          </div>
          {stationThree ? (
            <div style={{ marginTop: 10, marginBottom: 10 }} />
          ) : (
            <Button
              onClick={() => buyStationFunction(3, 560)}
              disabled={
                startStation === true &&
                stationOne === true &&
                stationTwo === true
                  ? false
                  : true
              }
              variant="contained"
              color="primary"
              className={classes.buyButtonStylingSpan2}
            >
              COMPRA/BUY
            </Button>
          )}
        </div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <div className={classes.mainCont}>
            {stationFour ? (
              <img src={stationActive4} className={classes.cards} />
            ) : (
              <img
                src={station4}
                className={classes.cards}
                style={{ cursor: "pointer", marginBottom: 10 }}
                title="click on the image to active it"
              />
            )}
            <div className={classes.indicator}>
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
                {indicatorFour ? indicatorFour : 0}
              </span>
            </div>
          </div>
          {stationFour ? (
            <div style={{ marginTop: 10, marginBottom: 10 }} />
          ) : (
            <Button
              onClick={() => buyStationFunction(4, 1120)}
              disabled={
                startStation === true &&
                stationOne === true &&
                stationTwo === true &&
                stationThree === true
                  ? false
                  : true
              }
              variant="contained"
              color="primary"
              className={classes.buyButtonStylingSpan2}
            >
              COMPRA/BUY
            </Button>
          )}
        </div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <div className={classes.mainCont}>
            {finishStation ? (
              <img src={finishActive} className={classes.cards} />
            ) : (
              <img
                src={finish}
                className={classes.cards}
                style={{ cursor: "pointer", marginBottom: 10 }}
                title="click on the image to active it"
              />
            )}
            <div className={classes.indicator}>
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
                {finishIndicator ? finishIndicator : 0}
              </span>
            </div>
          </div>
          {finishStation ? (
            <div style={{ marginTop: 10, marginBottom: 10 }} />
          ) : (
            <Button
              onClick={() => buyStationFunction(5, 2240)}
              disabled={
                startStation === true &&
                stationOne === true &&
                stationTwo === true &&
                stationThree === true &&
                stationFour === true
                  ? false
                  : true
              }
              variant="contained"
              color="primary"
              className={classes.buyButtonStylingSpan2}
            >
              COMPRA/BUY
            </Button>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default MobileIndiCards;
