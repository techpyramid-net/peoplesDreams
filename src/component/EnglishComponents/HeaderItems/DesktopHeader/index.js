import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import headerLogo from "../../../../assets/headstrong/headstock desktop version.png";
import store from "../../../../redux/store";
import { useSelector } from "react-redux";
import logo from "../../../../assets/betaLogo.jpeg";

/**
 * @author
 * @function DesktopHeader
 **/

const DesktopHeader = (props) => {
  const classes = useStyles();

  const { isAuthenticated, authByTrxId } = useSelector((state) => ({
    isAuthenticated: state.UserReducer.isAuthenticated,
    authByTrxId: state.UserReducer.authByTrxId,
  }));

  let getLan = localStorage.getItem("lang");
  const logout = () => {
    localStorage.removeItem("_peoplesdreams_user_session_byId");
    localStorage.removeItem("_peoplesdreams_user_wallet_address");

    store.dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <Grid container className={classes.mainContainer}>
      {/* <div
        style={{
          backgroundColor: "#A64993",
          width: "100%",
          height: 500,
        }}
      >
        <img src={logo} />
      </div> */}
      {isAuthenticated ? (
        <span
          style={{
            position: "absolute",
            right: 15,
            bottom: 15,
            fontWeight: "bold",
            color: "white",
            cursor: "pointer",
            fontSize: 17,
          }}
          onClick={logout}
        >
          {getLan === "#en" ? "Log Out" : "cerrar sesión"}
        </span>
      ) : null}
      <img src={headerLogo} className={classes.logo} />
    </Grid>
  );
};

export default DesktopHeader;
