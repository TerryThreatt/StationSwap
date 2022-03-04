import Paper from "@mui/material/Paper";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addLaptop } from "../../actions/laptopActions"; // change to login

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();
    //   change to login
    this.props.addLaptop(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <Paper sx={{ height: 200, width: 200 }}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <button
                type="submit"
                style={{
                  backgroundColor: "#2b4570",
                  color: "#fff",
                  borderRadius: "10%",
                }}
              >
                Sign-In
              </button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default connect(null, { addLaptop })(Login);  // change to login
