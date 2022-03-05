import Paper from "@mui/material/Paper";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addRental } from "../../actions/rentalActions";

class RentalInput extends Component {
  state = {
    laptop_id: "",
    request_date: "",
    name: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLaptopChange = (e) => {
    this.setState({
      laptop_id: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRental(this.state, this.props.history);
    this.setState({
      laptop_id: "",
      request_date: "",
      name: "",
      email: "",
    });
  };

  render() {
    const rentable = this.props.laptops.laptops.filter(
      (laptops) => laptops.rentals.length === 0
    );
    return (
      <div>
        <Paper sx={{ height: 400, width: 300 }}>
          <br />
          <h5>Add Rental</h5>
          <br />

          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <label>Laptop: </label> <br />
                <select
                  onChange={this.handleLaptopChange}
                  laptop_id={this.state.laptop_id}
                >
                  <option>Select Laptop</option>
                  {rentable.map((laptop) => (
                    <option key={laptop.id} value={laptop.id}>
                      {laptop.name}
                    </option>
                  ))}
                </select>
              </div>
              <br />
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
              <br />
              <div>
                <label>Email: </label>
                <br />
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
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
}

export default connect(null, { addRental })(RentalInput);
