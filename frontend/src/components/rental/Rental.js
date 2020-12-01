import React from 'react'


const Rental = props => {

    let rental = props.rentals.filter(rental => rental.id === props.match.params.id)[0]

    return(
        <div>
            {rental}
        </div>
    )
}

export default Rental