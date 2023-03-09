import React from "react";

export default function Dropdown(props) {
  const {
    selectedValue,
    source,
    onDataChange,
    placeHolder,
    isCountrySelected,
    index,
  } = props;

  const handleChange = (index, evnt) => {
    onDataChange(index,evnt.target);
  };

  let isDisabled = false;

  if (placeHolder === "city" && !isCountrySelected) {
    isDisabled = true;
  }
  return (
    <select
      className="dropDownList"
      value={selectedValue}
      name={index}
      //onChange={handleChange}
      onChange={(evnt) => handleChange(index, evnt)}
      disabled={isDisabled}
    >
      <option value="">Select a {placeHolder}</option>
      {source.map((data) => (
        <option key={data} value={data}>
          {data}
        </option>
      ))}
    </select>
  );
}
