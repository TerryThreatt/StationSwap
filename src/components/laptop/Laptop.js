// import {Card, Button, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap'
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

function Laptop(props){
  return (
    <div className="laptop">
      <Card
        sx={{
          width: 350,
          height: 225,
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ height: "75px", textAlign: "center" }}
            >
              {props.specs}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing={true} className="laptop-button">
          <Link to="/rentals/new">
            <Button
              sx={{
                backgroundColor: "#2b4570",
                color: "#fff",
                borderRadius: "10%",
                "&:hover": { backgroundColor: "#2b4570" },
                height: "35px",
                width: "67.7px",
              }}
            >
              Rent
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Laptop;
