import React, { useState, useEffect } from "react";

//importing component
import EnglishAuth from "../modules/EnglishVersion/auth";
import MainHeader from "../modules/EnglishVersion/Header";
import SpanishAuth from "../modules/SpanishVersion/auth";
import EnglishHome from "../routing/EnglishHome";
import SpanishhomePage from "../routing/SpanishHome";
import SplashScreen from "../modules/SplashScreen";
import store from "../redux/store";
import { checkCurrentWallet } from "../redux/actions";
import { environment } from "../environment";
import { getUserData } from "../userDataFunctions";

//
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

//
import { useSelector, useDispatch } from "react-redux";

//
import TronHelper from "../utils/TronHelper";
import { toast } from "react-toastify";

//
import { getTopFiveReferrals } from "../redux/actions";

/**
 * @author
 * @function MainApp
 **/

//for english
const AuthRouteEng = ({ component: Component, authUser, ...rest }) => (
  <Route
    path="/"
    exact
    render={(props) =>
      !authUser ? (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      ) : (
        //  || isDemo
        <Component {...props} />
      )
    }
  />
);

//for spanish
const AuthRouteSpan = ({ component: Component, authUser, ...rest }) => (
  <Route
    path="/"
    exact
    render={(props) =>
      !authUser ? (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      ) : (
        //  || isDemo
        <Component {...props} />
      )
    }
  />
);

const MainApp = (props) => {
  const [selectedLang, setSelectedLang] = useState("#en");
  const [tronWeb, setTronWeb] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  const {
    isAuthenticated,
    getTronWeb,
    randomAuth,
    currentUserStatus,
  } = useSelector((state) => ({
    isAuthenticated: state.UserReducer.isAuthenticated,
    getTronWeb: state.UserReducer.getTronWeb,
    randomAuth: state.UserReducer.randomAuth,
    currentUserStatus: state.UserReducer.currentUserStatus,
  }));

  useEffect(() => {
    let getLan = localStorage.getItem("lang");
    if (getLan != "" && getLan != undefined && getLan != null) {
      setSelectedLang(getLan);
    }
  }, []);

  const getCurrentWallet = async () => {
    try {
      let getWalletSession = await localStorage.getItem(
        "_peoplesdreams_user_session_byId"
      );
      let getWalletAddress = await localStorage.getItem(
        "_peoplesdreams_user_wallet_address"
      );

      if (
        getWalletSession &&
        getWalletAddress &&
        tronWeb &&
        props.defaultAd === getWalletAddress
      ) {
        await getUserData(getWalletAddress, tronWeb).then(() => {
          store.dispatch({
            type: "ALL_AUTHENTICATED",
          });
        }).then(()=>{
          dispatch(getTopFiveReferrals());
        })
        
        // console.log("error is here====>");
      } else if (!getWalletSession && !getWalletAddress) {
        console.log("came here");
        store.dispatch({
          type: "AUTHENTICATED_FAILED",
        });
      } else if (props.defaultAd && props.defaultAd != getWalletAddress) {
        console.log("now came here");

        store.dispatch({
          type: "AUTHENTICATED_FAILED",
        });
      } 
    } catch (err) {
      console.log("error is here====>", err);
      store.dispatch({
        type: "AUTHENTICATED_FAILED",
      });
    }
  };

  React.useEffect(() => {
    getCurrentWallet();
  }, [tronWeb, props.defaultAd]);

  if (currentUserStatus === "") {
    return <SplashScreen />;
  } else
    return (
      <div>
        <MainHeader />

        {selectedLang === "#en" ? (
          <AuthRouteEng authUser={isAuthenticated} component={EnglishHome} />
        ) : (
          <AuthRouteSpan
            authUser={isAuthenticated}
            component={SpanishhomePage}
          />
        )}

        {selectedLang === "#en" ? (
          <Route
            path="/login"
            component={() => <EnglishAuth setSelectedLang={setSelectedLang} />}
          />
        ) : (
          <Route
            path="/login"
            component={() => <SpanishAuth setSelectedLang={setSelectedLang} />}
          />
        )}
      </div>
    );
};

export default MainApp;
