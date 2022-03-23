import Grid from "@mui/material/Grid";
import React from "react";
import Laptop from "../components/laptop/Laptop";
import Laptops from "../components/laptop/Laptops";

const LaptopsContainer = (props) => {
  const laptops = props.laptops.laptops;
  <Laptops laptops={laptops} />;

  return (
    <div className="laptops">
      <br />
      <Grid container spacing={4} style={{ textAlign: "center" }}>
        {laptops && laptops.map((laptop) => {
          return (
            <Grid item xs={1} md={3} key={laptop.id}>
              <Laptop
                key={laptop.id}
                id={laptop.id}
                name={laptop.name}
                specs={laptop.specs}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default LaptopsContainer;
