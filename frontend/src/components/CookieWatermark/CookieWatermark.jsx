import React, { memo } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const CookieWatermark = () => {
  return <Logo className="cookie-watermark" />;
};

export default memo(CookieWatermark);
