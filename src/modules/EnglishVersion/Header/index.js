import React from "react";
import DesktopHeader from "../../../component/EnglishComponents/HeaderItems/DesktopHeader";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileHeader from "../../../component/EnglishComponents/HeaderItems/MobilesHeader";

/**
 * @author
 * @function MainHeader
 **/

const MainHeader = (props) => {
  const matches = useMediaQuery("(min-width:750px)");

  return <>{matches ? <DesktopHeader /> : <MobileHeader />}</>;
};

export default MainHeader;
