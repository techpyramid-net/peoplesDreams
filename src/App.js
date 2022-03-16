import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./config/globalTheme";
import { BrowserRouter as Router } from "react-router-dom";
import { getUserData } from "./userDataFunctions";

//importing css
import "./App.css";

//importing components
import MainApp from "./routing/mainApp";

//importing store
import store from "./redux/store";
import { Provider } from "react-redux";

//
import TronWeb from "tronweb";

//
import TronHelper from "./utils/TronHelper";

//toastr
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tronWeb, setTronWeb] = React.useState();

  React.useEffect(() => {
    window.onload = function () {
      if (!window.tronWeb) {
        const HttpProvider = TronWeb.providers.HttpProvider;
        const fullNode = new HttpProvider("https://api.trongrid.io");
        const solidityNode = new HttpProvider("https://api.trongrid.io");
        const eventServer = "https://api.trongrid.io/";

        const gettronWeb = new TronWeb(fullNode, solidityNode, eventServer);
        window.tronWeb = gettronWeb;
      } else {
        // setdefaultAddress(window.tronWeb.defaultAddress.base58);
      }
    };
  }, []);

  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  React.useEffect(()=>{
    localStorage.removeItem("loadingById")
    localStorage.removeItem("loading");
  },[])

  // React.useEffect(() => {
  // if (tronWeb) {
  // setInterval(() => {
  // getUserData(tronWeb.defaultAddress.base58,tronWeb);
  // }, 2000);
  //   }
  // }, [tronWeb]);

  React.useEffect(() => {
    if (window.location.href.includes("?ref=")) {
      let getAddress = window.location.href.split("?ref=")[1];
      let final = getAddress.slice(0, 34);
      localStorage.setItem("peoplesDreamsRefAddress", final);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <MainApp defaultAd={tronWeb && tronWeb.defaultAddress.base58} />
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
