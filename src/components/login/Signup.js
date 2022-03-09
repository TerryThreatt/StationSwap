import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/loginActions"; // change to login

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ email, password });
    setEmail("");
    setPassword("");
  };

    return (
      <div>
        <Paper sx={{ height: 300, width: 300 }}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <br />
              <button
                type="submit"
                className="button"
              >
                Sign-Up
              </button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }

export default connect(null, { signup })(Signup);
