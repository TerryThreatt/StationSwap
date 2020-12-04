import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRental } from '../../actions/rentalActions'

class RentalInput extends Component {
    state = {
        request_date: '',
        name: '',
        email: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addRental(this.state, this.props.laptop.id)
        this.setState({
            request_date: '',
            name: '',
            email: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Request Date:</label>
                    <input type="datetime-local" placeholder="Request Date" value={this.state.request_date} name="request_date" onChange={this.handleChange}/>
                    <label>Name:</label>
                    <input type="text-local" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <label>Email:</label>
                    <input type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addRental })(RentalInput)