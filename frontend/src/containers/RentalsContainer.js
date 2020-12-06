import React, { Component } from 'react'
import Rentals from '../components/rental/Rentals'
import { connect } from 'react-redux'
import RentalInput from '../components/rental/RentalInput'
import { getRentals } from '../actions/rentalActions'

class RentalsContainer extends Component {

    componentDidMount(){
        this.props.getRentals()
    }

    render() {
        return (
            <div className="rentals">
                <h3>Add new Rental</h3>
                <RentalInput rental={this.props.rental}/>
                <Rentals rentals={this.props.rental} />

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rentals: state.rentals
    }
}

export default connect(mapStateToProps, { getRentals })(RentalsContainer)