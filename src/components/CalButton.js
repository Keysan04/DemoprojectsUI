import React from "react";

const CalButton = ({ cls, label, handleOnChange }) => {
  return (
    <div className={cls} onClick={() => handleOnChange(label)}>
      {label}
    </div>
  );
};

export default CalButton;
