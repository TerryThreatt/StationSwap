import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRental } from '../../actions/addRental'

class RentalInput extends Component {
    state = {
        request_date: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addRental(this.state, this.props.employees.id)
        this.setState({
            request_date: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Request Date:</label>
                    <input type="datetime-local" placeholder="Request Date" value={this.state.request_date} name="request_date" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addRental })(RentalInput)