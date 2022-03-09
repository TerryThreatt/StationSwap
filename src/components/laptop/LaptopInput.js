import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addLaptop } from "../../actions/laptopActions";

function LaptopInput(props) {
  const [name, setName] = useState("");
  const [specs, setSpecs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addLaptop({ name, specs });
    setName("");
    setSpecs("");
  };
    return (
      <div>
        <Paper sx={{ height: 300, width: 300 }}>
          <br />
          <h5>Add Laptop</h5>
          <br />
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div>
                <label>Name: </label>
                <br />
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Specs: </label>
                <br />
                <input
                  type="text"
                  name="specs"
                  value={specs}
                  onChange={(e) => setSpecs(e.target.value)}
                />
              </div>
              <br />
              <button
                type="submit"
                className="button"
              >
                Submit
              </button>
            </div>
          </form>
        </Paper>
      </div>
    );
}

export default connect(null, { addLaptop })(LaptopInput);
