import React from 'react'
import { Link } from 'react-router-dom'
import Rental from './Rental'


const Rentals = props => {

    const { rentals } = props

    const rentalsList = rentals && rentals.map(rental => {
        return (
            <li>
                <Rental key={rental.id} rental={rental}>
                    <Link to={`/rental/${rental.id}`}>{rental.name}</Link>
                </Rental>
            </li>
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

Rentals.defaultProps = {
    rentals: []
}

export default Rentals