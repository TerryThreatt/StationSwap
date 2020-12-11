import React from 'react'
import Rental from './Rental'

const Rentals = props => {

    return (
        <div>
            {props.rentals && props.rentals.map(rental =>
                    <Rental key={rental.id} id={rental.id} requestDate={rental.requestDate} name={rental.name} email={rental.email} laptop={rental} />
            )}
        </div>
    )
}

export default Rentals