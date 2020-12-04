import React from 'react'
import RentalsContainer from '../../containers/RentalsContainer'


const Laptop = props => {

    const { laptop } = props

    return (
        <div>
             {laptop.name}
            <RentalsContainer laptop={laptop}/>
        </div>
    )
}

export default Laptop