import React from "react";
import Grid from "@material-ui/core/Grid";
import englishButn from "../../../assets/buttons Englis/BOTON INGLES.png";
import spanButn from "../../../assets/buttons Englis/spanishLan.png";
import auto from "../../../assets/buttons Englis/auto.png";
import here from "../../../assets/buttons Englis/here.png";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import { toast } from "react-toastify";
import { environment } from "../../../environment";
import { getUserData } from "../../../userDataFunctions";
import Loader from "react-loader-spinner";
import { saveUser, getTopFiveReferrals } from "../../../redux/actions";

//
import { useSelector, useDispatch } from "react-redux";

//
import TronHelper from "../../../utils/TronHelper";

//
import { uuid } from "uuidv4";

/**
 * @author
 * @function EnglishAuth
 **/

const EnglishAuth = ({ setSelectedLang }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  let getRef = localStorage.getItem("peoplesDreamsRefAddress");

  const [tronWeb, setTronWeb] = React.useState();
  const [trxID, setTrxID] = React.useState(getRef ? getRef : "");

  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.UserReducer.isAuthenticated,
  }));

  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);

  // const checkById = async () => {
  //   if (trxID === "") {
  //     toast.error("please enter id!");
  //   } else {
  //     let getContract = await tronWeb
  //       .contract()
  //       .at(environment.contractAddress);
  //     if (getContract) {
  //       getContract
  //         .userList(trxID)
  //         .call()
  //         .then((val) => {
  //           // console.log("here is the value===>", tronWeb.address.fromHex(val));
  //           getUserData(tronWeb.address.fromHex(val), tronWeb);
  //         })
  //         .then(() => {
  //           localStorage.setItem("_peoplesdreams_user_session_byId", uuid());
  //           localStorage.setItem("_peoplesdreams_user_trxId", trxID);

  //           store.dispatch({
  //             type: "RANDOM_ID_AUTHENTICATION",
  //           });
  //         });
  //     }
  //   }
  // };

  const checkById = async () => {
    if (trxID === "") {
      toast.error("please enter id!");
    } else {
      localStorage.setItem("loadingById", "true");
      if (tronWeb && tronWeb.ready) {
        let getContract = await tronWeb
          .contract()
          .at(environment.contractAddress);
        if (getContract) {
          getContract
            .users(tronWeb.defaultAddress.base58)
            .call()
            .then((val) => {
              if (val.isExist) {
                toast.warning(
                  "you are already exist please click on AutoLogin"
                );
                localStorage.setItem("loadingById", "false");
              } else {
                getContract
                  .buyStartStation(trxID)
                  .send({
                    feeLimit: 100_000_000,
                    callValue: tronWeb.toSun(150),
                  })
                  .then((value) => {
                    getUserData(tronWeb.defaultAddress.base58, tronWeb)
                      .then(() => {
                        localStorage.setItem(
                          "_peoplesdreams_user_session_byId",
                          uuid()
                        );

                        localStorage.setItem(
                          "_peoplesdreams_user_wallet_address",
                          tronWeb.defaultAddress.base58
                        );

                        store.dispatch({
                          type: "YES_AUTHENTICATED",
                        });
                        localStorage.setItem("loadingById", "false");
                      })
                      .then(async () => {
                        let getId = trxID;
                        await getContract
                          .users(getId)
                          .call()
                          .then((val) => {
                            dispatch(
                              saveUser(val.referredUsers.toNumber(), getId)
                            );
                          })
                          // .then(() => {
                          //   dispatch(getTopFiveReferrals());
                          // });
                      })
                  })
                  .catch(() => {
                    localStorage.setItem("loadingById", "false");
                  });
              }
            });
        }
      }
    }
  };

  const checkWalletFunction = async () => {
    // console.log("clicked");
    localStorage.setItem("loading", "true");
    if (tronWeb && tronWeb.ready) {
      let getContract = await tronWeb
        .contract()
        .at(environment.contractAddress);
      if (getContract) {  
        getContract
          .users(tronWeb.defaultAddress.base58)
          .call()
          .then((val) => {
            if (val.isExist) {
              getUserData(tronWeb.defaultAddress.base58, tronWeb).then(() => {
                localStorage.setItem("loading", "false");
                localStorage.setItem(
                  "_peoplesdreams_user_session_byId",
                  uuid()
                );

                localStorage.setItem(
                  "_peoplesdreams_user_wallet_address",
                  tronWeb.defaultAddress.base58
                );
                store.dispatch({
                  type: "YES_AUTHENTICATED",
                });
              }).then(()=>{
                dispatch(getTopFiveReferrals());
              })
            } else {
              toast.error("user does not exist!");
              localStorage.setItem("loading", "false");
            }
          })
          .catch((err) => {
            localStorage.setItem("loading", "false");
          });
      }
    } else {
      toast.error("please signup or login to you wallet first!");
      localStorage.setItem("loading", "false");
    }
  };

  // console.log("called")

  return (
    <>
      <Grid
        container
        spacing={3}
        style={{ margin: 0, width: "100%", paddingTop: 10, paddingBottom: 50 }}
      >
        <Grid item xs={12}>
          <div
            style={{
              color: "gray",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            Select your language
          </div>
          <div style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedLang("#en");
                localStorage.setItem("lang", "#en");
              }}
            >
              <img src={englishButn} className="lanButton" />
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedLang("#spainish");
                localStorage.setItem("lang", "#spainish");
              }}
            >
              <img src={spanButn} className="lanButton" />
            </span>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ width: "80%", margin: "auto" }}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-search"
              value={trxID}
              onChange={(e) => setTrxID(e.target.value)}
              //   label="Search field"
              //   type="search"
              placeholder="Enter your ID/TRX Address"
              variant="outlined"
            />
          </div>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {localStorage.getItem("loadingById") === "true" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={here}
                className="hereButton"
                style={{ cursor: "pointer", position: "relative", left: 10 }}
              />
              <Loader
                style={{ position: "relative", right: 40 }}
                type="Puff"
                color="white"
                height={25}
                width={25}
              />
            </div>
          ) : (
            <img
              src={here}
              className="hereButton"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (tronWeb && tronWeb.ready) {
                  checkById();
                } else {
                  toast.error("please connect your wallet first!");
                }
              }}
            />
          )}
        </Grid>

        {/* auto login */}
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {localStorage.getItem("loading") === "true" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={auto}
                className="hereButton"
                style={{ position: "relative", left: 12 }}
              />
              <Loader
                style={{ position: "relative", right: 40 }}
                type="Puff"
                color="yellow"
                height={25}
                width={25}
              />
            </div>
          ) : (
            <img
              src={auto}
              style={{ cursor: "pointer" }}
              className="hereButton"
              onClick={checkWalletFunction}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default EnglishAuth;
