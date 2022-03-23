import Grid from "@mui/material/Grid";
import React from "react";
import Rental from "../components/rental/Rental";
import Rentals from "../components/rental/Rentals";

const RentalsContainer = (props) => {
  const rentals = props.rentals.rentals;
  <Rentals rentals={rentals} />;

  return (
    <div className="rentals">
      <br />
      <Grid container spacing={4} style={{textAlign: 'center'}}>
        {rentals && rentals.map((rental) => {
          return (
            <Grid item xs={1} md={3} key={rental.id}>
              <Rental
                key={rental.id}
                id={rental.id}
                requestDate={rental.request_date}
                name={rental.name}
                email={rental.email}
                laptop={rental.laptop.name}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RentalsContainer;
