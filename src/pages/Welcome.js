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
        <div id="login">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
