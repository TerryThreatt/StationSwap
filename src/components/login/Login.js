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
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="login-input">
              <div className="login-input-text">
                <div>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.handleChange}
                    style={{ backgroundColor: "#EDEFF1", borderRadius: "4px"}}
                  />
                </div>
                <br />
                <div>
                  <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.handleChange}
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
}

export default connect(null, { addLaptop })(Login); // change to login
