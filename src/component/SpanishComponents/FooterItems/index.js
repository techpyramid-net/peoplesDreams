import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import button1 from "../../../assets/buttons/button1.png";
import button2 from "../../../assets/buttons/button2.png";
// import button3 from "../../../assets/buttons/button3.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import footerIcon from "../../../assets/ICONS.png";

/**
 * @author
 * @function FooterItems
 **/

const FooterItems = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:492px)");

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12}>
        {matches ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Link to="/"> */}
            <img
              style={{ cursor: "pointer" }}
              src={button1}
              className={classes.resimgs}
              onClick={() =>
                window.open(
                  "https://tronscan.org/#/contract/TQxTR726itwW6UxHXXLT5F3Rqv1ZwPVhhh/code",
                  "_blank"
                )
              }
            />
            {/* </Link> */}
            {/* <Link to="/"> */}
            <img
              src={button2}
              className={classes.resimgs}
              onClick={() =>
                window.open("http://peoplesdreams.epizy.com", "_blank")
              }
            />
            {/* </Link> */}
            {/* <Link to="/"> */}
            {/* <img src={button3} className={classes.resimgs} /> */}
            {/* </Link> */}
          </div>
        ) : (
          <>
            {/* <Link to="/"> */}
            <img
              style={{ cursor: "pointer" }}
              src={button1}
              className={classes.imgs}
              onClick={() =>
                window.open(
                  "https://tronscan.org/#/contract/TQxTR726itwW6UxHXXLT5F3Rqv1ZwPVhhh/code",
                  "_blank"
                )
              }
            />
            {/* </Link> */}
            {/* <Link to="/"> */}
            <img
              style={{ cursor: "pointer" }}
              src={button2}
              className={classes.imgs}
              onClick={() =>
                window.open("http://peoplesdreams.epizy.com", "_blank")
              }
            />
            {/* </Link> */}
            {/* <Link to="/"> */}
            {/* <img src={button3} className={classes.imgs} /> */}
            {/* </Link> */}
          </>
        )}
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        {matches ? (
          <img src={footerIcon} className={classes.resp_image} />
        ) : (
          <img src={footerIcon} className={classes.image} />
        )}
      </Grid>
    </Grid>
  );
};

export default FooterItems;
