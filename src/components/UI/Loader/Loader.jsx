import React from "react";

const Loader = ({ isInline, isFetch, isFull, center }) => {
  return (
    <>
      {" "}
      {isFetch ? <span className="loader--inline loader--fetch"></span> : null}
      {isInline ? <span className="loader--inline"></span> : null}
      {isFull ? (
        <div className={`loader ${center ? "u-center-text" : ""}`}>
          <div className="loader__load">&nbsp;</div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
