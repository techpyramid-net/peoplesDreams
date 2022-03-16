import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import tronIcon from "../../../assets/tron.png";
import run from "../../../assets/run.png";

import TronHelper from "../../../utils/TronHelper";

//redux
import { useSelector } from "react-redux";

/**
 * @author
 * @function ReferralLinkItems
 **/

const ReferralLinkItems = (props) => {
  const classes = useStyles();
  const [tronWeb, setTronWeb] = React.useState();

  const {
    totalReferral,
    contractReward,
    referralReward,
    stationReward,
    userAddress,
    userRefId,
    startStation,
  } = useSelector((state) => ({
    totalReferral: state.UserReducer.totalReferral,
    contractReward: state.UserReducer.contractReward,
    referralReward: state.UserReducer.referralReward,
    stationReward: state.UserReducer.stationReward,
    userAddress: state.UserReducer.userAddress,
    userRefId: state.UserReducer.userRefId,
    startStation: state.UserReducer.startStation,
  }));

  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  const copyReferralLink = () => {
    let get = document.getElementById("refer").select();
    document.execCommand("copy");
  };

  return (
    <Grid container className={`${classes.mainContainer} referralContainer`}>
      <Grid item xs={12} lg={6} md={6} className={classes.inputGrid}>
        <Typography variant="span" style={{ fontWeight: 500 }}>
          Referral Link
        </Typography>
        <TextField
          id="refer"
          className={classes.referralField}
          disabled={startStation === true ? false : true}
          variant="outlined"
          value={`https://www.peoplesdreams.net/?ref=${tronWeb&&tronWeb.defaultAddress.base58}`}
          size="small"
          InputProps={{
            endAdornment: (
              <Button
                disabled={startStation === true ? false : true}
                className={"change_butn"}
                onClick={copyReferralLink}
              >
                Copy
              </Button>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} lg={6} md={6} className={classes.rightGrid}>
        <div className={classes.setPadding}>
          <Typography variant="span" style={{ fontWeight: 500 }}>
            Mi Carrera
          </Typography>
          <Grid container className={classes.myCareerInnerContainer}>
            <Grid item xs={12} lg={12} sm={12}>
              <Typography
                variant="span"
                style={{ wordBreak: "break-all" }}
                className={`${classes.myAddress} ${"mycareer-headings"}`}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={run} style={{ height: 50 }} />
                  <span>{userAddress}</span>
                </div>
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <div className={classes.contain}>
                <Typography
                  variant="h6"
                  className={`${classes.title} ${"mycareer-headings"}`}
                >
                  Total por referidos
                </Typography>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={tronIcon}
                    style={{ width: "35px", height: "35px" }}
                  />
                  <span style={{ paddingLeft: 3 }}>
                    {totalReferral ? totalReferral : 0}
                  </span>
                </div>
              </div>
              <div className={classes.contain}>
                <Typography
                  variant="h6"
                  className={`${classes.title} ${"mycareer-headings"}`}
                >
                  Recompensa de referidos
                </Typography>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={tronIcon}
                    style={{ width: "35px", height: "35px" }}
                  />
                  <span style={{ paddingLeft: 3 }}>
                    {referralReward ? referralReward : 0}
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <div className={classes.contain}>
                <Typography
                  variant="h6"
                  className={`${classes.title} ${"mycareer-headings"}`}
                >
                  Recompensa por contrato
                </Typography>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={tronIcon}
                    style={{ width: "35px", height: "35px" }}
                  />
                  <span style={{ paddingLeft: 3 }}>
                    {contractReward ? contractReward : 0}
                  </span>
                </div>
              </div>
              <div className={classes.contain}>
                <Typography
                  variant="h6"
                  className={`${classes.title} ${"mycareer-headings"}`}
                >
                  Recompensa por estación
                </Typography>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={tronIcon}
                    style={{ width: "35px", height: "35px" }}
                  />
                  <span style={{ paddingLeft: 3 }}>
                    {stationReward ? stationReward : 0}
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default ReferralLinkItems;
