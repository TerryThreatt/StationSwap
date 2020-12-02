import React from 'react'
import { Link } from 'react-router-dom'


const Rentals = props => {

    return(
        <div>
            <ul>
                {props.rentals.map(rental =>
                    <li key={rental.id}>
                        <Link to={`/rentals/${rental.id}`}>{rental}</Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default Rentals