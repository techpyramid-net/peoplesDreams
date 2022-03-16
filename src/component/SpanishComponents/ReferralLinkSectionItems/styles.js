import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    width: "90%",
    margin: "auto",
  },
  referralField: {
    width: "100%",
    borderRadius: "0px !important",
    marginTop: 5,
  },
  change_butn: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "0px !important",
    fontWeight: "bold",
    padding: 7,
    paddingLeft: 30,
    paddingRight: 30,
    position: "relative",
    left: 13,
    "&:hover": {
      backgroundColor: theme.palette.buttonHover,
    },
  },
  inputGrid: {
    padding: 20,
  },
  rightGrid: {
    width: "100%",
  },
  myCareerInnerContainer: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: theme.palette.primary.main,
    padding:20,
    color:"white",
    marginTop:5
  },
  setPadding: {
    padding: 20,
  },
  myAddress: {
    fontWeight: "bold",
    color: "white",
  },
  title:{
    fontWeight:600,
    fontSize:15
  },
  contain:{
    paddingTop:10,
    paddingBottom:10
  }
}));
