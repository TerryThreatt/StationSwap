import React from "react";
import Rental from "../components/rental/Rental";

const RentalsContainer = (props) => {
  const rentals = props.rentals.rentals;

  return (
    <div className="rentals">
      <br />
        {rentals &&
          rentals.map((rental) => {
            return (
                <Rental
                  key={rental.id}
                  id={rental.id}
                  requestDate={rental.request_date}
                  name={rental.name}
                  email={rental.email}
                  laptop={rental.laptop.name}
                />
            );
          })}
    </div>
  );
};

export default RentalsContainer;
