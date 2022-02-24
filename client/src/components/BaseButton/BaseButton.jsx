import React from "react";
import classNames from "clsx";

import "./BaseButton.scss";

function BaseButton({
  title,
  variant,
  className: wrapperStyle,
  ...otherProps
}) {
  const buttonStyle = variant ? `base-button--${variant}` : "";

  return (
    <input
      className={classNames("base-button", wrapperStyle, buttonStyle)}
      type="button"
      value={title}
      {...otherProps}
    />
  );
}

export default BaseButton;
