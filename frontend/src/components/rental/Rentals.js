import React from 'react'
import { Link } from 'react-router-dom'
import Rental from './Rental'


const Rentals = props => {

    const { rentals } = props

    const rentalsList = rentals.map(rental => {
        return <Rental key={rental.id} rental={rental}>
            <Link to={`/rental/${rental.id}`}>{rental.name}</Link>
        </Rental>
    })

    return(
        <div>
            <ul>
                {rentalsList}
            </ul>
        </div>
    )
}

export default Rentals