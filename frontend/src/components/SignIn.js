import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInEmployee } from '../actions/signInEmployee'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signInEmployee(this.state)
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange}/>
                    <br/>
                    <label >Password:</label>
                    <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { signInEmployee })(SignIn)