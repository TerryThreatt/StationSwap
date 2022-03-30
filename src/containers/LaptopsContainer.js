import React from "react";
import Laptop from "../components/laptop/Laptop";

const LaptopsContainer = (props) => {
  const laptops = props.laptops.laptops;

  return (
    <div className="laptops">
      <br />
        {laptops && laptops.map((laptop) => {
          return (
              <Laptop
                key={laptop.id}
                id={laptop.id}
                name={laptop.name}
                specs={laptop.specs}
              />
          );
        })}
    </div>
  );
};

export default LaptopsContainer;
