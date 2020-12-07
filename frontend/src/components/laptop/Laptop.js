import React from 'react'
import RentalsContainer from '../../containers/RentalsContainer'

const Laptop = props => {

    console.log(props.laptops)
    let laptop = props.laptops && props.laptops.filter(laptop => laptop.id === props.match.params.id)

    return (
        <div>
            <li>
             <h1>{laptop.name}</h1>
            </li>
            <RentalsContainer laptop={laptop}/>
        </div>
    )
}


export default Laptop