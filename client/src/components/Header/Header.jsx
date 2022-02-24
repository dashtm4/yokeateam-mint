import React, { useEffect, useState } from "react";
import Fortmatic from "fortmatic";
import Web3 from "web3";

import HeaderDesktopView from "./HeaderDesktopView";
import HeaderMobileView from "./HeaderMobileView";

import "./Header.scss";

const fm = new Fortmatic(process.env.REACT_APP_FORTMATIC_API_KEY);
window.web3 = new Web3(fm.getProvider());

function Header({ show, toggle }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {}, [isLoggedIn]);

  const login = () => {
    fm.user.login().then(async () => {
      const isUserLoggedIn = await fm.user.isLoggedIn();

      setLoggedIn(isUserLoggedIn);
    });
  };

  const logout = () => {
    fm.user.logout();
    setLoggedIn(false);
  };

  return (
    <>
      <div className="header__desktop">
        <HeaderDesktopView
          onClick={isLoggedIn ? logout : login}
          isLoggedIn={isLoggedIn}
        />
      </div>
      <div className="header__mobile">
        <HeaderMobileView
          show={show}
          toggle={toggle}
          onClick={isLoggedIn ? logout : login}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </>
  );
}

export default Header;
