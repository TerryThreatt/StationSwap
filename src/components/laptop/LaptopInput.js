import Paper from "@mui/material/Paper";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addLaptop } from "../../actions/laptopActions";

class LaptopInput extends Component {
  state = {
    name: "",
    specs: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLaptop(this.state);
    this.setState({
      name: "",
      specs: "",
    });
  };

  render() {
    return (
      <div>
        <Paper sx={{ height: 300, width: 300 }}>
          <br />
          <h5>Add Laptop</h5>
          <br />
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <label>Name: </label>
                <br />
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Specs: </label>
                <br />
                <input
                  type="text"
                  name="specs"
                  value={this.state.specs}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <button
                type="submit"
                style={{
                  backgroundColor: "#2b4570",
                  color: "#fff",
                  borderRadius: "10%",
                  height: "35px",
                  width: "67.7px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default connect(null, { addLaptop })(LaptopInput);
