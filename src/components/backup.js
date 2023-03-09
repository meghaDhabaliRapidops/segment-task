import React, { useState } from "react";
import Dropdown from "./Dropdown";
import data from "../data.json";
import { Row, Col, Input } from "antd";

function AddRemoveInputField() {
  // State definition
  const [state, setState] = useState([{
    selectedCountry: "",
    isCountrySelected: false,
    selectedCity: "",
    isCitySelected: false,
  }
]);

const [rowIndex, setRownIndex] = useState(0);

  // Country list from data.json
  const countryList = data.countries;

  // Countries
  const countries = countryList.map((c) => {
    return c.country;
  });
//console.log("countriesc",countries)
//console.log("state.isCountrySelected", state[rowIndex].isCountrySelected)
  // Cities
  const cities = state[rowIndex].isCountrySelected
    ? countryList
        .filter((d) => d.country === state[rowIndex].selectedCountry)
        .map((c) => {
          return c.cities;
        })[0]
    : [];

  // onChange Events
  const onCountryChange = (index,evnt) => {

    console.log(evnt.value);
    console.log(evnt.name);
    let setIsCountrySelected = evnt.name !== "" ? true : false;

    // setState({
    //   selectedCountry: country,
    //   isCountrySelected: setIsCountrySelected,
    //   selectedCity: "",
    //   isCitySelected: false,
    // });

    console.log("eventerdfghfd", evnt);

    const { name, value } = evnt;
    const list = [...state];
    list[index][name] = value;
    list[index]["selectedCountry"] = value;
    list[index]['isCountrySelected'] = setIsCountrySelected;
    list[index]['selectedCity'] = "";
    list[index]["isCitySelected"] =  false;
    setState(list);
    setRownIndex(index);
    //setInputFields(list);

  };

  console.log("cities",cities);

  const onCityChange = (city) => {
    let setIsCitySelected = city !== "" ? true : false;

    // setState({
    //   ...state,
    //   selectedCity: city,
    //   isCitySelected: setIsCitySelected,
    // });


    setState([...state,
      {
        selectedCountry: "",
        isCountrySelected: false,
        selectedCity: city,
        isCitySelected: setIsCitySelected,
      }
    ]);

  };


  const [inputFields, setInputFields] = useState([
    {
      fullName: "",
      lastName: "",
    },
  ]);

  const addInputField = () => {
    // setInputFields([
    //   ...inputFields,
    //   {
    //     fullName: "",
    //     lastName: "",
    //   },
    // ]);
    setState([...state,
      {
        selectedCountry: "",
        isCountrySelected: false,
        selectedCity: "",
        isCitySelected: false,
      }
    ]);
  };
  const removeInputFields = (index) => {
    console.log("remove index", index);
    const rows = [...state];
    rows.splice(index, 1);
    setState(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  console.log(state)
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          
          {state.map((data, index) => {
            //const { selectedCountry, emailAddress, salary, lastName } = data;
            return (
              <div className="row my-3" key={index}>
                <Row>
                  <Col span={6}>
                    <Dropdown
                      source={countries}
                      selectedValue={state.selectedCountry}
                      onDataChange={onCountryChange}
                      placeHolder="country"
                      index={index}
                    />
                  </Col>
                  <Col span={6}>
                    <Dropdown
                      source={cities}
                      selectedValue={state.selectedCity}
                      onDataChange={onCityChange}
                      placeHolder="city"
                      isCountrySelected={data.isCountrySelected}
                      index={index}
                    />
                  </Col>
                  <Col span={6}>
                    <Input />
                  </Col>
                  <Col span={6}>
                    <div className="">
                      {state.length !== 1 ? (
                        <button
                          className="btn btn-outline-danger"
                          onClick={removeInputFields}
                        >
                          x
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                </Row>

                {/* <div className="col">
                  <div className="form-group"> */}
                    {/* <input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={fullName}
                      name="fullName"
                      className="form-control"
                      placeholder="Full Name"
                    /> */}
                    {/* <Dropdown
                      source={countries}
                      selectedValue={state.selectedCountry}
                      onDataChange={onCountryChange}
                      placeHolder="country"
                    /> */}
                    {/* <input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={lastName}
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                    /> */}
                    {/* <Dropdown
                      source={cities}
                      selectedValue={state.selectedCity}
                      onDataChange={onCityChange}
                      placeHolder="city"
                      isCountrySelected={state.isCountrySelected}
                    /> */}

                    {/* <div className="">
                      {inputFields.length !== 1 ? (
                        <button
                          className="btn btn-outline-danger"
                          onClick={removeInputFields}
                        >
                          x
                        </button>
                      ) : (
                        ""
                      )}
                    </div> */}
                  </div>
              //   </div>
              // </div>
            );
          })}

          <div className="row">
            <div className="col-sm-12">
              <button
                className="btn btn-outline-success "
                onClick={addInputField}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}
export default AddRemoveInputField;
