import React, { useEffect, useState } from "react";

//importing component
import ReferralLinkSection from "../modules/EnglishVersion/ReferralLinkSection";
import StationIndicators from "../modules/EnglishVersion/StationsIndicators";
import TopWinnerMain from "../modules/EnglishVersion/Top5Winners";
import Footer from "../modules/EnglishVersion/Footer";
import store from "../redux/store";

//
import TronHelper from "../utils/TronHelper";

/**
 * @author
 * @function EnglishomePage
 **/

const EnglishomePage = (props) => {
  const [tronWeb, setTronWeb] = useState();
  const [lastTronWalletAddress, setTronWalletAddress] = useState("");

  useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (tronWeb && tronWeb.ready) {
      setTronWalletAddress(tronWeb.defaultAddress.base58);
    }
  }, [tronWeb]);

  useEffect(() => {
    if (tronWeb && tronWeb.ready && lastTronWalletAddress) {
      let forclear = setInterval(() => {
        if (tronWeb.defaultAddress.base58 === lastTronWalletAddress) {
        } else {
          localStorage.removeItem("_peoplesdreams_user_session_byId");
          localStorage.removeItem("_peoplesdreams_user_wallet_address");
          setTronWalletAddress("");
          store.dispatch({
            type: "LOGOUT",
          });
          clearInterval(forclear);
        }
      }, 1000);
    }
  }, [tronWeb, lastTronWalletAddress]);

  return (
    <div>
      <ReferralLinkSection />
      <StationIndicators />
      <TopWinnerMain />
      <Footer />
    </div>
  );
};

export default EnglishomePage;
