import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  imgContainer: {
    textAlign: "center",
    // marginTop:20,
    marginBottom: 30,
    position: "relative",
  },
  cardMain: {
    paddingTop: 40,
    margin: "auto",
    width: "85%",
  },
  cards: {
    width: "90%",
    height: "auto",
    margin: "auto",
  },
  buyButtonStylingSpanish:{
    position: "absolute",
    top: "73%",
    right:0,
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "#FFCD36",
    color:"#A64993",
    padding:" 0px 8px !important"
  }
}));
