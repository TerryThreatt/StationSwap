import React from 'react'
import { Link } from 'react-router-dom'


const Rentals = props => {

    return(
        <div>
            {props.rentals.map(rental =>
                <li key={rental.id}>
                    <Link to={`/rentals/${rental.id}`}>{rental}</Link>
                </li>)}
        </div>
    )
}

export default Rentals