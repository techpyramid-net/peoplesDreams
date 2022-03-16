let initState = {
  //auth
  isAuthenticated: false,
  getTronWeb: "",
  randomAuth: false,
  userAddress: "",
  authByTrxId: false,
  currentUserStatus: "",

  //topCard
  totalReferral: "",
  contractReward: "",
  referralReward: "",
  stationReward: "",

  //indicators
  startIndicator: "",
  indicatorOne: "",
  indicatorTwo: "",
  indicatorThree: "",
  indicatorFour: "",
  finishIndicator: "",

  //stations
  startStation: "",
  stationOne: "",
  stationTwo: "",
  stationThree: "",
  stationFour: "",
  finishStation: "",

  //top referrals
  topOneReferral: "",
  topTwoReferral: "",
  topThreeReferral: "",
  topFourReferral: "",
  topFiveReferral: "",

  //top referrals number
  topReferralNumber1: "",
  topReferralNumber2: "",
  topReferralNumber3: "",
  topReferralNumber4: "",
  topReferralNumber5: "",

  //user ref id
  userRefId: "",

  //payment received
  paymentForStart: "",
  paymentForOne: "",
  paymentForTwo: "",
  paymentForThree: "",
  paymentForFour: "",
  paymentForFive: "",

  //top five referral from firebase
  topFiveReferralsFromFirebase: [],
};

export const UserReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    //top five referreals from firebase
    case "STORE_TOP_FIVE_REFERRALS":
      return {
        ...state,
        topFiveReferralsFromFirebase: payload,
      };
    //check payments
    case "CHECK_RECIVED_PAYMENT_FOR_START":
      return {
        ...state,
        paymentForStart: payload,
      };

    case "CHECK_RECIVED_PAYMENT_FOR_ONE":
      return {
        ...state,
        paymentForOne: payload,
      };

    case "CHECK_RECIVED_PAYMENT_FOR_TWO":
      return {
        ...state,
        paymentForTwo: payload,
      };

    case "CHECK_RECIVED_PAYMENT_FOR_THREE":
      return {
        ...state,
        paymentForThree: payload,
      };

    case "CHECK_RECIVED_PAYMENT_FOR_FOUR":
      return {
        ...state,
        paymentForFour: payload,
      };

    case "CHECK_RECIVED_PAYMENT_FOR_FIVE":
      return {
        ...state,
        paymentForFive: payload,
      };

    //top referral numbers
    case "TOP_REFERRAL_1_NUMBERS":
      return {
        ...state,
        topReferralNumber1: payload,
      };

    case "TOP_REFERRAL_2_NUMBERS":
      return {
        ...state,
        topReferralNumber2: payload,
      };

    case "TOP_REFERRAL_3_NUMBERS":
      return {
        ...state,
        topReferralNumber3: payload,
      };

    case "TOP_REFERRAL_4_NUMBERS":
      return {
        ...state,
        topReferralNumber4: payload,
      };

    case "TOP_REFERRAL_5_NUMBERS":
      return {
        ...state,
        topReferralNumber5: payload,
      };

    case "USER_REF_ID":
      return {
        ...state,
        userRefId: payload,
      };
    case "ALL_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: true,
        currentUserStatus: "done",
      };

    case "AUTHENTICATED_FAILED":
      return {
        ...state,
        isAuthenticated: false,
        currentUserStatus: "not done",
      };

    //top referrals
    case "TOP_REFERRAL_1":
      return {
        ...state,
        topOneReferral: payload,
      };

    case "TOP_REFERRAL_2":
      return {
        ...state,
        topTwoReferral: payload,
      };

    case "TOP_REFERRAL_3":
      return {
        ...state,
        topThreeReferral: payload,
      };

    case "TOP_REFERRAL_4":
      return {
        ...state,
        topFourReferral: payload,
      };

    case "TOP_REFERRAL_5":
      return {
        ...state,
        topFiveReferral: payload,
      };

    //auth
    case "YES_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        currentUserStatus: "loggedOut",
      };
    // case  "NOT_AUTHENTICATED":
    //   return {
    //     ...state,
    //     randomAuth: "not done",
    //   };
    case "USER_ADDRESS":
      return {
        ...state,
        userAddress: payload,
      };

    case "WEB_TRON":
      return {
        ...state,
        isAuthenticated: true,
        getTronWeb: payload,
      };

    case "FAILED":
      return {
        ...state,
        isAuthenticated: false,
        // getTronWeb: undefined,
      };

    case "RANDOM_ID_AUTHENTICATION":
      return {
        ...state,
        isAuthenticated: true,
        authByTrxId: true,
        randomAuth: true,
      };

    //top card
    case "TOTAL_REFERRAL":
      return {
        ...state,
        totalReferral: payload,
      };

    case "CONTRACT_REWARD":
      return {
        ...state,
        contractReward: payload,
      };

    case "REFERRAL_REWARD":
      return {
        ...state,
        referralReward: payload,
      };

    case "STATION_REWARD":
      return {
        ...state,
        stationReward: payload,
      };

    //indicators
    case "START_INDICATOR":
      // console.log("here is the start indicator===>", payload);
      return {
        ...state,
        startIndicator: payload,
      };

    case "STATION_ONE_INDICATOR":
      return {
        ...state,
        indicatorOne: payload,
      };

    case "STATION_TWO_INDICATOR":
      return {
        ...state,
        indicatorTwo: payload,
      };

    case "STATION_THREE_INDICATOR":
      return {
        ...state,
        indicatorThree: payload,
      };

    case "STATION_FOUR_INDICATOR":
      return {
        ...state,
        indicatorFour: payload,
      };

    case "FINISH_INDICATOR":
      return {
        ...state,
        finishIndicator: payload,
      };

    //stations
    case "START_STATION":
      // console.log("here is the start station=====>", payload);
      return {
        ...state,
        startStation: payload,
      };

    case "STATION_ONE":
      return {
        ...state,
        stationOne: payload,
      };

    case "STATION_TWO":
      return {
        ...state,
        stationTwo: payload,
      };

    case "STATION_THREE":
      return {
        ...state,
        stationThree: payload,
      };

    case "STATION_FOUR":
      return {
        ...state,
        stationFour: payload,
      };

    case "FINISH_STATION":
      return {
        ...state,
        finishStation: payload,
      };

    default:
      return state;
  }
};
