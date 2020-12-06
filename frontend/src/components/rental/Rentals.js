import React from 'react'
import { Link } from 'react-router-dom'
import Rental from './Rental'
import { connect } from 'react-redux'


const Rentals = props => {

    const { rentals } = props

    const rentalsList = rentals && rentals.map(rental => {
        return (
                <Rental key={rental.id} rental={rental}>
                    <Link to={`/rental/${rental.id}`}>{rental.name}</Link>
                </Rental>
        )
    })

    return (
        <div>
            <ul>
                {rentalsList}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        rentals: state.rentals
    }
}

Rentals.defaultProps = {
    rentals: []
}

export default connect(mapStateToProps, null)(Rentals)