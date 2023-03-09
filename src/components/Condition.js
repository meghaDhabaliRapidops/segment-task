import React, { useState } from "react";
import Dropdown from "./Dropdown";
import data from "../data.json";
import { Row, Col, Input } from "antd";

export default function Condition() {
  // State definition
  const [state, setState] = useState({
    selectedCountry: "",
    isCountrySelected: false,
    selectedCity: "",
    isCitySelected: false,
  });

  // Country list from data.json
  const countryList = data.countries;

  // Countries
  const countries = countryList.map((c) => {
    return c.country;
  });

  // Cities
  const cities = state.isCountrySelected
    ? countryList
        .filter((d) => d.country === state.selectedCountry)
        .map((c) => {
          return c.cities;
        })[0]
    : [];

  // onChange Events
  const onCountryChange = (country) => {
    let setIsCountrySelected = country !== "" ? true : false;

    setState({
      selectedCountry: country,
      isCountrySelected: setIsCountrySelected,
      selectedCity: "",
      isCitySelected: false,
    });
  };

  const onCityChange = (city) => {
    let setIsCitySelected = city !== "" ? true : false;

    setState({
      ...state,
      selectedCity: city,
      isCitySelected: setIsCitySelected,
    });
  };

  // Selection
  const selection = (
    <p>
      {state.isCitySelected
        ? state.selectedCountry + " - " + state.selectedCity
        : "..."}
    </p>
  );
  return (
    <div style={{marginLeft: "30px"}}> 
      <Row>
        <Col span={6}>
          <Dropdown
            source={countries}
            selectedValue={state.selectedCountry}
            onDataChange={onCountryChange}
            placeHolder="country"
          />
        </Col>

        <Col span={6}>
          <Dropdown
            source={cities}
            selectedValue={state.selectedCity}
            onDataChange={onCityChange}
            placeHolder="city"
            isCountrySelected={state.isCountrySelected}
          />
        </Col>

        <Col span={6}>
          <Input />
        </Col>
      </Row>
    </div>
  );
}
