import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import Laptop from "./Laptop";

function Laptops(props) {
  const laptops = props.laptops;

  return (
    <div className="laptops">
      <Container>
        <Grid container spacing={1}>
          {laptops &&
            laptops.map((laptop) => (
              <Grid item xs={1} md={1}>
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
      </Container>
    </div>
  );
}

export default Laptops;
