import { Paper } from "@mui/material";
import React from "react";
import Login from "../components/login/Login";

function Welcome() {
  return (
    <div className="landing-page">
      <div id="landing-text">
        <h1>Welcome!</h1>
        <h3>Laptop Rentals for Remote Teams</h3>
      </div>
      <div id="user-input">
        <Paper sx={{ height: 200, width: 300 }}>
          <div id="login">
            <Login />
          </div>
        </Paper>
        <div id="signup">
          <a className="button" href="/signup">
            Create Account →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
