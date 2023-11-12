import React, { useEffect, useState } from "react";

const Message = ({ text, status = "success" }) => {
  const [show, setShow] = useState(true);
  const hideMessage = (e) => setShow(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, [text]);
  return (
    <>
      {show && (
        <div className={`message message--${status}`} onClick={hideMessage}>
          {text}
        </div>
      )}
    </>
  );
};

export default Message;
