import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Rental extends Component {
  render() {
    return (
      <div>
        <div>
          <Card sx={{ width: 350, height: 200 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {this.props.laptop}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {this.props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {this.props.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {this.props.requestDate}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="rental-button">
              <Link to={`/rentals/${this.props.id}`}>
                <Button
                  sx={{
                    backgroundColor: "#2b4570",
                    color: "#fff",
                    borderRadius: "10%",
                    "&:hover": { backgroundColor: "#2b4570" },
                    height: "35px",
                    width: "67.7px",
                    padding: "1px 6px",
                  }}
                >
                  View
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default Rental;
