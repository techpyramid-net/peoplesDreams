import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import side from "../../assets/sideLogo.png";

/**
* @author
* @function SplashScreen
**/

const SplashScreen = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a64893",
      }}
    >
      <img src={side} style={{height:"30%"}}/>
      <CircularProgress disableShrink style={{ color: "white" }} />
    </div>
  );

 }

export default SplashScreen