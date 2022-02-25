import React from "react";

import { ReactComponent as GreenSplashSrc } from "../../../assets/svg/green-splash.svg";
import "./LandingContent.scss";

function LandingContent() {
  return (
    <section className="base__container landing-content">
      <div className="landing-content__title">Unique Digital Collectables</div>
      <div className="landing-content__wrapper">
        <GreenSplashSrc className="landing-content__bg" />
        <div className="landing-content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </section>
  );
}

export default LandingContent;
