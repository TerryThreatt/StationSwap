import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLaptop } from '../../actions/laptopActions'

class LaptopInput extends Component {
    state = {
        name: '',
        specs: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addLaptop(this.state)
        this.setState({
            name: '',
            specs: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <br/>
                    <label>Specs:</label>
                    <input type="text" placeholder="Specs" value={this.state.specs} name="specs" onChange={this.handleChange}/>
                    <input type="submit" color="info"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addLaptop })(LaptopInput)