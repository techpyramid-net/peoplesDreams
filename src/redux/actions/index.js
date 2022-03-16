import store from "../store";
import { db } from "../../firebase";

export const checkCurrentWallet = (tronWeb) => {
  // let check=await tronWeb;
  if (tronWeb && tronWeb.ready) {
    store.dispatch({
      type: "AUTHENTICATED",
    });
  } else {
    store.dispatch({
      type: "FAILED",
    });
  }
};

export const saveUser = (referrals, address) => async (dispatch) => {
  db.collection("users")
    .where("address", "==", address)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot) {
        let getId = "";
        querySnapshot.forEach(function (doc) {
          getId = doc.id;
        });
        if (getId) {
          // console.log("here is the id====>", getId);
          db.collection("users")
            .doc(getId)
            .update({
              totalReferrals: referrals,
            })
            .then(() => {
              dispatch(getTopFiveReferrals());
            });
        } else {
          db.collection("users")
            .add({
              totalReferrals: referrals,
              address: address,
            })
            .then(() => {
              dispatch(getTopFiveReferrals());
            });
        }
      }
    });
};

export const getTopFiveReferrals = () => async (dispatch) => {
  // console.log("yes called well======================================>")
  db.collection("users")
    .get()
    .then(function (querySnapshot) {
      var storeUser = [];
      querySnapshot.forEach(function (doc) {
        storeUser.push({ docId: doc.id, ...doc.data() });
      });
      // console.log("===>", storeUser);

      let finalData = storeUser.sort(
        (a, b) => parseFloat(b.totalReferrals) - parseFloat(a.totalReferrals)
      );
      dispatch({
        type: "STORE_TOP_FIVE_REFERRALS",
        payload: finalData.slice(0, 5),
      });
    });
};
