import { environment } from "./environment";
import store from "./redux/store";
import { toast } from "react-toastify";

export const getUserData = async (defaultAddress, tronWeb) => {
  // console.log("called====>", defaultAddress, "======>", tronWeb);
  let getContract = await tronWeb
    .contract()
    .at(environment.contractAddress)
    .then(async (contract) => {
      //user address
      store.dispatch({
        type: "USER_ADDRESS",
        payload: defaultAddress,
      });

      //user object
      await contract
        .users(defaultAddress)
        .call()
        .then((val) => {
          // console.log("==================>", val.isExist);
          //start station
          // store.dispatch({
          //   type: "START_STATION",
          //   payload: val.isExist,
          // });

          //user ref id
          store.dispatch({
            type: "USER_REF_ID",
            payload: val.id.toNumber(),
          });

          //total for referral
          store.dispatch({
            type: "TOTAL_REFERRAL",
            payload: val.referredUsers.toNumber(),
          });

          //contract reward
          store.dispatch({
            type: "CONTRACT_REWARD",
            payload: val.contractReward.toNumber(),
          });

          //referral reward
          store.dispatch({
            type: "REFERRAL_REWARD",
            payload: val.refReward.toNumber(),
          });

          //station reward
          store.dispatch({
            type: "STATION_REWARD",
            payload: val.StationReward.toNumber(),
          });
        });

      //start indicator
      await contract
        .startStationUserCount()
        .call()
        .then((val) => {
          store.dispatch({
            type: "START_INDICATOR",
            payload: val.toNumber(),
          });
        });

      //station 1 indicator
      await contract
        .station1UserCount()
        .call()
        .then((val) => {
          store.dispatch({
            type: "STATION_ONE_INDICATOR",
            payload: val.toNumber(),
          });
        });

      //station 2 indicator
      await contract
        .station2UserCount()
        .call()
        .then((val) => {
          store.dispatch({
            type: "STATION_TWO_INDICATOR",
            payload: val.toNumber(),
          });
        });

      //station 3 indicator
      await contract
        .station3UserCount()
        .call()
        .then((val) => {
          store.dispatch({
            type: "STATION_THREE_INDICATOR",
            payload: val.toNumber(),
          });
        });

      //station 4 indicator
      await contract
        .station4UserCount()
        .call()
        .then((val) => {
          store.dispatch({
            type: "STATION_FOUR_INDICATOR",
            payload: val.toNumber(),
          });
        });

      //finish indicator
      await contract
        .station5UserCount()
        .call()
        .then((val) => {
          store.dispatch({
            type: "FINISH_INDICATOR",
            payload: val.toNumber(),
          });
        });

      //start station
      await contract
        .startStationusers(defaultAddress)
        .call()
        .then((val) => {
          store.dispatch({
            type: "CHECK_RECIVED_PAYMENT_FOR_START",
            payload: val.payment_received.toNumber(),
          });
          store.dispatch({
            type: "START_STATION",
            payload: val.isExist,
          });
        });

      //station 1
      await contract
        .station1users(defaultAddress)
        .call()
        .then((val) => {
          store.dispatch({
            type: "CHECK_RECIVED_PAYMENT_FOR_ONE",
            payload: val.payment_received.toNumber(),
          });
          store.dispatch({
            type: "STATION_ONE",
            payload: val.isExist,
          });
        });

      //station 2
      await contract
        .station2users(defaultAddress)
        .call()
        .then((val) => {
          store.dispatch({
            type: "CHECK_RECIVED_PAYMENT_FOR_TWO",
            payload: val.payment_received.toNumber(),
          });
          store.dispatch({
            type: "STATION_TWO",
            payload: val.isExist,
          });
        });

      //station 3
      await contract
        .station3users(defaultAddress)
        .call()
        .then((val) => {
          store.dispatch({
            type: "CHECK_RECIVED_PAYMENT_FOR_THREE",
            payload: val.payment_received.toNumber(),
          });
          store.dispatch({
            type: "STATION_THREE",
            payload: val.isExist,
          });
        });

      //station 4
      await contract
        .station4users(defaultAddress)
        .call()
        .then((val) => {
          store.dispatch({
            type: "CHECK_RECIVED_PAYMENT_FOR_FOUR",
            payload: val.payment_received.toNumber(),
          });
          store.dispatch({
            type: "STATION_FOUR",
            payload: val.isExist,
          });
        });

      //finish
      await contract
        .station5users(defaultAddress)
        .call()
        .then((val) => {
          store.dispatch({
            type: "CHECK_RECIVED_PAYMENT_FOR_FIVE",
            payload: val.payment_received.toNumber(),
          });
          store.dispatch({
            type: "FINISH_STATION",
            payload: val.isExist,
          });
        });

      //top five referrals

      //top1
      // await contract
      //   .arr(4)
      //   .call()
      //   .then(async (val) => {
      //     let getVal = tronWeb.address.fromHex(val);
      //     await contract
      //       .users(getVal)
      //       .call()
      //       .then((value) => {
      //         store.dispatch({
      //           type: "TOP_REFERRAL_1_NUMBERS",
      //           payload: value.referredUsers.toNumber(),
      //         });
      //         store.dispatch({
      //           type: "TOP_REFERRAL_1",
      //           payload: tronWeb.address.fromHex(val),
      //         });
      //       });
      //   });

      //top2
      // await contract
      //   .arr(3)
      //   .call()
      //   .then(async (val) => {
      //     let getVal = tronWeb.address.fromHex(val);
      //     await contract
      //       .users(getVal)
      //       .call()
      //       .then((value) => {
      //         store.dispatch({
      //           type: "TOP_REFERRAL_2_NUMBERS",
      //           payload: value.referredUsers.toNumber(),
      //         });
      //         store.dispatch({
      //           type: "TOP_REFERRAL_2",
      //           payload: tronWeb.address.fromHex(val),
      //         });
      //       });
      //   });

      //top3
      // await contract
      //   .arr(2)
      //   .call()
      //   .then(async (val) => {
      //     let getVal = tronWeb.address.fromHex(val);
      //     await contract
      //       .users(getVal)
      //       .call()
      //       .then((value) => {
      //         store.dispatch({
      //           type: "TOP_REFERRAL_3_NUMBERS",
      //           payload: value.referredUsers.toNumber(),
      //         });
      //         store.dispatch({
      //           type: "TOP_REFERRAL_3",
      //           payload: tronWeb.address.fromHex(val),
      //         });
      //       });
      //   });

      //top4
      // await contract
      //   .arr(1)
      //   .call()
      //   .then(async (val) => {
      //     let getVal = tronWeb.address.fromHex(val);
      //     await contract
      //       .users(getVal)
      //       .call()
      //       .then((value) => {
      //         store.dispatch({
      //           type: "TOP_REFERRAL_4_NUMBERS",
      //           payload: value.referredUsers.toNumber(),
      //         });
      //         store.dispatch({
      //           type: "TOP_REFERRAL_4",
      //           payload: tronWeb.address.fromHex(val),
      //         });
      //       });
      //   });

      //top5
      // await contract
      //   .arr(0)
      //   .call()
      //   .then(async (val) => {
      //     let getVal = tronWeb.address.fromHex(val);
      //     await contract
      //       .users(getVal)
      //       .call()
      //       .then((value) => {
      //         store.dispatch({
      //           type: "TOP_REFERRAL_5_NUMBERS",
      //           payload: value.referredUsers.toNumber(),
      //         });
      //         store.dispatch({
      //           type: "TOP_REFERRAL_5",
      //           payload: tronWeb.address.fromHex(val),
      //         });
      //       });
      //   });
    });
};

//buy start station function
export const buyStartStation = async (
  contract,
  userAddress,
  amount,
  tronWeb
) => {
  try {
    await contract
      .buyStartStation()
      .send({
        feeLimit: 100_000_000,
        callValue: tronWeb.toSun(amount),
      })
      .then((output) => {
        toast.success("successfully bought!");
        getUserData(userAddress, tronWeb);
      });
  } catch (error) {
    // console.log(error);
    toast.error("Deinied or something went wrong!");
  }
};

//buy 1 station to finish
export const buyAllStations = async (
  contract,
  userAddress,
  uint,
  amount,
  tronWeb
) => {
  try {
    await contract
      .buyStations(uint)
      .send({
        feeLimit: 100_000_000,
        callValue: tronWeb.toSun(amount),
      })
      .then((output) => {
        toast.success("successfully bought!");
        getUserData(userAddress, tronWeb);
      });
  } catch (error) {
    toast.error("Deinied or something went wrong!");
  }
};

export const investFun = async (
  contract,
  contractAddress,
  amount,
  tronWeb,
  closeModal,
  successMessage
) => {
  try {
    let getRefAddress = localStorage.getItem("peoplesDreamsRefAddress");
    let getDirectFromUrl;

    let url = window.location.href;

    if (url.includes("?ref=")) {
      let getAddress = url.split("?ref=")[1];
      let final = getAddress.slice(0, 34);
      getDirectFromUrl = final;
    }

    await contract

      .invest(
        getDirectFromUrl
          ? getDirectFromUrl
          : getRefAddress
          ? getRefAddress
          : environment.defaultRefAddress
      )
      .send({
        feeLimit: 100_000_000,
        callValue: tronWeb.toSun(amount),
      })
      .then((output) => {
        if (closeModal) {
          closeModal(true);
        }
        if (successMessage) {
          successMessage("Deposited Successfully!");
        }
        getUserData(tronWeb.defaultAddress.base58);
        // console.log("successfully");
        // clickme("done");
        // store.dispatch({
        //   type: "DEPOSIT_DONE",
        // });
        // console.log("successfully deposited");
      });
  } catch (err) {
    // console.log("error", err);
  }
};

export const withdrawFunct = async (
  contract,
  tronWeb,
  closeIt,
  withdrawsuccessMessage
) => {
  try {
    await contract
      .withdraw()
      .send()
      .then(() => {
        if (closeIt) {
          closeIt(true);
        }
        if (withdrawsuccessMessage) {
          withdrawsuccessMessage("Withdraw Successfully!");
        }
        getUserData(tronWeb.defaultAddress.base58);
        // console.log("successfully");
      });
  } catch (err) {
    // console.log("err", err);
  }
};
