import React from "react";

import { BaseButton } from "../../../components";

import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import "./HeaderDesktopView.scss";

const MENU_ITEMS = [{ title: "Home" }, { title: "About" }, { title: "FAQ" }];

function HeaderDesktopView({ isLoggedIn, onClick }) {
  const handleClick = () => {
    onClick();
  };

  const title = isLoggedIn ? "Disconnect" : "Connect Wallet";

  return (
    <div className="header-desktop__container">
      <Logo height="44" />

      <ul className="header-desktop__menu">
        {MENU_ITEMS.map((item, itemIndex) => (
          <li key={itemIndex}>{item.title}</li>
        ))}
      </ul>

      <BaseButton title={title} variant="outline" onClick={handleClick} />
    </div>
  );
}

export default HeaderDesktopView;
