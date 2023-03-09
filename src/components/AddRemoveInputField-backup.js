import { useState } from "react";
function AddRemoveInputField() {
  const [inputFields, setInputFields] = useState([
    {
      fullName: "",
      lastName: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        fullName: "",
        lastName: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          {inputFields.map((data, index) => {
            const { fullName, emailAddress, salary, lastName } = data;
            return (
              <div className="row my-3" key={index}>
                <div className="col">
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={fullName}
                      name="fullName"
                      className="form-control"
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={lastName}
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="col">
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
                </div>
              </div>
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
