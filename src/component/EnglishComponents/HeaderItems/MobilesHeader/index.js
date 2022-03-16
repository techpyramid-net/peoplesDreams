import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import headerLogo from "../../../../assets/fondo.png";
import store from "../../../../redux/store";
import { useSelector } from "react-redux";
import logo from '../../../../assets/logo blanco.png'
/**
 * @author
 * @function MobileHeader
 **/

const MobileHeader = (props) => {
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
      {isAuthenticated ? (
        <span
          style={{
            zIndex:1000,
            position: "absolute",
            right: 15,
            top: 10,
            // bottom: 15,
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
      <div style={{ position: "relative", display: "inline" }}>
        <img
          src={logo}
          style={{
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <img src={headerLogo} className={classes.logo} />
      </div>
    </Grid>
  );
};

export default MobileHeader;
