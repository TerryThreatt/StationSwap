import React from 'react'

const Rental = props => {

    console.log(props.rentals)
    let rental = props.rentals && props.rentals.filter(rental => rental.id === props.match.params.id)
    return(
        <div>
            <li>
                <h1>{rental.name}</h1>
            </li>
        </div>
    )
}

export default Rental