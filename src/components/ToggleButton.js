import React, { useState } from "react";
import { Input } from 'antd';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(1);
  const handleClick = (value) => {
    setIsOn(value);
  };
  return (
    <>
      <input
        className={isOn === 1 ? "button1 orange" : "button1"}
        onClick={() => handleClick(1)}
        value="AND"
        type="button"
      />
      <input
        className={isOn === 2 ? "button2 orange" : "button2"}
        onClick={() => handleClick(2)}
        value="OR"
        type="button"
      />
    </>
  );
}
