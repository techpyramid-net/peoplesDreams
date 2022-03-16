import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    color: theme.palette.topHeading,
    fontWeight: "bold",
  },
  topHeadContainer: {
    textAlign: "center",
    // paddingTop:20,
    paddingBottom: 30,
  },

  cards: {
    maxWidth: "100%",
    width: "95%",
    height: "auto",
    margin: "auto",
  },
  carouselContainer: {
    backgroundColor: "white",
    marginLeft: 30,
    overflow: "hidden",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 30,
  },
  yellowArea: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontWeight: 700,
    color: theme.palette.primary.main,
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },
  primaryArea: {
    backgroundColor: theme.palette.primary.main,
    borderTopRightRadius:13,
    borderBottomRightRadius:13
  },
  cardMainContainer: {
    width: "95%",
    margin: "auto",
    borderRadius: 13,
  },
  address: {
    wordBreak: "break-word",
    color: "white",
    fontSize: 14,
  },
}));
