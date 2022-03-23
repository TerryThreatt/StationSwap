import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

function Rental(props) {
  return (
    <div>
      <div>
        <Card sx={{ width: 350, height: 200 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.laptop}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Name: {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {props.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: {props.requestDate}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default Rental;
