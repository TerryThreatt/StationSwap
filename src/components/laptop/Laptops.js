import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import Laptop from "./Laptop";

const Laptops = (props) => {
  return (
    <div className="container">
      {console.log(props)}
      <Grid container spacing={4}>
        {props.laptops &&
          props.laptops.map((laptop) => (
            <Grid item xs={1} md={3}>
              <Laptop
                key={laptop.id}
                id={laptop.id}
                name={laptop.name}
                specs={laptop.specs}
                laptop={laptop}
              >
                <Link to={`/laptops/${laptop.id}`}>{laptop.name}</Link>
              </Laptop>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Laptops;
