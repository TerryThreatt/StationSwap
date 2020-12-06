import React from 'react'
import RentalsContainer from '../../containers/RentalsContainer'

const Laptop = props => {


    let laptop = props.laptops.filter(laptop => laptop.id === props.match.params.id)

    return (
        <div>
            <li>
             <h1>{laptop.name}</h1>
            <RentalsContainer laptop={laptop}/>
            </li>
        </div>
    )
}


export default Laptop