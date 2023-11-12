import React from "react";

const Heading = ({
  isSecondary,
  isTertiary,
  isForth,
  text,
  className,
  isWhite,
  children,
}) => {
  return (
    <React.Fragment>
      {isSecondary ? (
        <div className="  container u-center-text u-margin-bottom-medium">
          <h2 className={`heading--secondary ${className ? className : ""}`}>
            {text}
          </h2>
        </div>
      ) : null}
      {isTertiary ? (
        <h3
          className={`${className ? className : ""}
            ${isWhite ? "color--white" : ""}
           heading--tertiary u-margin-bottom-small u-center-text`}
        >
          {children}
        </h3>
      ) : null}
      {isForth ? (
        <h4 className="heading--forth u-margin-bottom-small">{text}</h4>
      ) : null}
    </React.Fragment>
  );
};

export default Heading;
