import React from "react";
import StationIndicatorItems from "../../../component/SpanishComponents/StationIndicatorsItems";
import StationCards from "../../../component/SpanishComponents/StationIndicatorsItems/desktopCards";
import MobileIndiCards from "../../../component/SpanishComponents/StationIndicatorsItems/MobileIndicatorsCards";

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
