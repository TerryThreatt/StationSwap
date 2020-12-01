import React from 'react'
import RentalsContainer from '../../containers/RentalsContainer'


const Laptop = props => {

    let laptop = props.laptops.filter(laptop => laptop.id === props.match.params.id)[0]

    return(
        <div>
            <RentalsContainer laptop={laptop}/>
        </div>
    )
}

export default Laptop