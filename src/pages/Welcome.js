import React from "react";
import Login from "../components/login/Login";

function Welcome() {
  return (
    <div id="landing-page">
      <div id="landing-text">
        <h1>Welcome!</h1>
        <h3>Laptop Rentals for Remote Teams</h3>
      </div>
      <div id="user-input">
            <div id="login">
                  <Login />
        </div>
      </div>
          <div id="signup">
              <button><a href="/signup">Create Account</a></button>
      </div>
    </div>
  );
}

export default Welcome;
