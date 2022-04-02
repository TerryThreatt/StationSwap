import React, { useState } from "react";
import { connect } from "react-redux";
import { addRental } from "../../actions/rentalActions";

function RentalInput(props) {
  const [laptopId, setLaptopId] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRental({ laptopId, requestDate, name, email }, props.history);
    setLaptopId("");
    setRequestDate("");
    setName("");
    setEmail("");
  };

  const laptops = props.laptops.laptops;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <br />
      <h5>Add Rental</h5>
      <br />
      <div>
        <div>
          <label style={{ textAlign: "left" }}>Laptop: </label> <br />
          <select
            onChange={(e) => setLaptopId(e.target.value)}
            laptopid={laptopId}
            value={laptopId}
          >
            <option>Select Laptop</option>
            {laptops && laptops.map((laptop) => (
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default connect(null, { addRental })(RentalInput);
