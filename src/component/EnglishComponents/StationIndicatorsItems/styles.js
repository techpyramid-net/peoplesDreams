import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    color: theme.palette.topHeading,
    fontWeight: "bold",
  },
  topHeadContainer: {
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 30,
  },
  indicatorsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  indicator: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
  },
  contain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
  },
  subHead: {
    paddingTop: 5,
    fontWeight: 400,
    color: theme.palette.topHeading,
  },
  cards: {
    width: "70%",
    height: "auto",
    // margin: "auto",
  },
  mainCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // paddingBottom:30,
    //   position:"relative",
    //   right:18
  },
  main: {
    margin: "auto",
    width: "83%",
    paddingTop: 30,
    paddingBottom: 30,
  },
  buttonStyling: {
    fontWeight: "bold",
    color: "white",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    // margin:"auto",
    // width:"50%"
  },
  buyButtonStyling2ForMobile: {
    position: "absolute",
    top: "69%",
    fontSize:9,
    right:118,
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "#FFCD36",
    color:"#A64993",
    padding:" 0px 8px !important"
  },
}));
