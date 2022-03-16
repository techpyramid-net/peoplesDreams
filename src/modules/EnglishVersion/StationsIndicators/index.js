import React from "react";
import StationIndicatorItems from "../../../component/EnglishComponents/StationIndicatorsItems";
import StationCards from "../../../component/EnglishComponents/StationIndicatorsItems/desktopCards";
import MobileIndiCards from '../../../component/EnglishComponents/StationIndicatorsItems/MobileIndicatorsCards';

import useMediaQuery from "@material-ui/core/useMediaQuery";

/**
 * @author
 * @function StationIndicators
 **/

const StationIndicators = (props) => {
  const matches = useMediaQuery("(max-width:492px)");

  return (
    <>
      {matches ? (
        <MobileIndiCards />
      ) : (
        <>
          <StationIndicatorItems />
          <StationCards />
        </>
      )}
    </>
  );
};

export default StationIndicators;
