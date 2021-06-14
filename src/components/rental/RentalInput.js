import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRental } from '../../actions/rentalActions'

class RentalInput extends Component {
    state = {
        laptop_id: '',
        request_date: '',
        name: '',
        email: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLaptopChange = e => {
        this.setState({
            laptop_id: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addRental(this.state, this.props.history)
        this.setState({
            laptop_id: '',
            request_date: '',
            name: '',
            email: ''
        })
    }

    render() {
            const rentable = this.props.laptops.laptops.filter(laptops => laptops.rentals.length === 0)
        return (
            <div>
                <br/>
                <h1>Add Rental</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Laptop: </label>
                    <select onChange={this.handleLaptopChange} laptop_id={this.state.laptop_id}>
                        <option>
                            Select Laptop 
                        </option>
                        {rentable.map(laptop => (
                            <option key={laptop.id} value={laptop.id}>
                                {laptop.name}
                            </option>
                        ))}
                    </select>
                    <br/>
                    <label>Name:</label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <br/>
                    <label>Email:</label>
                    <input type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange}/>
                    <br/>
                    <label>Request Date:</label>
                    <input type="date" placeholder="Request Date" value={this.state.request_date} name="request_date" onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" color="info" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addRental })(RentalInput)