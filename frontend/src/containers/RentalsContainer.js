import React from 'react'
import Rentals from '../components/rental/Rentals'
import Rental from '../components/rental/Rental'

const RentalsContainer = (props) => {

    <Rentals rentals={props.rentals.rentals} likesCounter={props.likesCounter}/>

    return (

        <div className="rentals">
            <br/>
            {props.rentals.rentals.map(rental => {
                return (
                    <Rental
                        key={rental.id}
                        id={rental.id}
                        requestDate={rental.request_date}
                        name={rental.name}
                        email={rental.email}
                        laptop={rental.laptop.name}
                        likesCounter={props.likesCounter}
                    />
                )
            })

                }

        </div>
    )
}


export default RentalsContainer