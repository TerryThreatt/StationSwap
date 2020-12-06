import React from 'react'
import RentalsContainer from '../../containers/RentalsContainer'

const Laptop = props => {

    const { laptop } = props

    return (
        <div>
            <li>
             {laptop.name}
            <RentalsContainer laptop={laptop}/>
            </li>
        </div>
    )
}


export default Laptop