import React from "react";
import classNames from "clsx";
import styled from "styled-components";
import { GrClose as CloseIcon } from "react-icons/gr";

import { BaseButton } from "../../../components";

import "./HeaderMobileView.scss";

const StyledOverlay = styled.div`
  background-color: #fff6;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const MENU_ITEMS = [{ title: "Home" }, { title: "About" }, { title: "FAQ" }];

function HeaderMobileView({ isLoggedIn, show, toggle, onClick }) {
  const title = isLoggedIn ? "Disconnect" : "Connect Wallet";

  const handleClick = () => {
    onClick();
  };

  return (
    <>
      {show && <StyledOverlay onClick={toggle} />}
      <div
        className={classNames(
          "header-mobile__container",
          show ? "header-mobile__show" : "header-mobile__hide"
        )}
      >
        <CloseIcon className="header-mobile__close-icon" onClick={toggle} />
        <ul className="header-mobile__menu">
          {MENU_ITEMS.map((item, itemIndex) => (
            <li key={itemIndex}>{item.title}</li>
          ))}
        </ul>
        <div className="header-mobile__connect-button">
          <BaseButton title={title} variant="outline" onClick={handleClick} />
        </div>

        <hr />
      </div>
    </>
  );
}

export default HeaderMobileView;
