import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/loginActions";

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    setEmail("");
    setPassword("");
  };

    return (
          <form onSubmit={(e) => handleSubmit(e)} className="login-form">
            <div className="login-input">
              <div className="login-input-text">
                <div>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ backgroundColor: "#EDEFF1", borderRadius: "4px"}}
                  />
                </div>
                <br />
                <div>
                  <input
                    type="text"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ backgroundColor: "#EDEFF1", borderRadius: "4px" }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="button"
                style={{ marginTop: "30px" }}
              >
                Sign-In
              </button>
            </div>
          </form>
    );
  }

export default connect(null, { login })(Login);
