import React from 'react'
import { Link } from 'react-router-dom'
import Rental from './Rental'

const Rentals = props => {

    return (
        <div>
            {props.rentals && props.rentals.map(rental =>
                    <Rental key={rental.id} rental={rental}>
                        <Link to={`/rental/${rental.id}`}>{rental.name}</Link>
                    </Rental>
            )}
        </div>
    )
}

export default Rentals