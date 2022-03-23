import Grid from "@mui/material/Grid";
import React from "react";
import Rental from "./Rental";

const Rentals = (props) => {
  const rentals = props.rentals;

  return (
    <div>
      <Grid container spacing={4}>
        {rentals &&
          rentals.map((rental) => (
            <Grid item xs={1} md={3}>
              <Rental
                key={rental.id}
                id={rental.id}
                requestDate={rental.requestDate}
                name={rental.name}
                email={rental.email}
                laptop={rental}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Rentals;
