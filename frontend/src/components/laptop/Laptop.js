import React from 'react'
import RentalsContainer from '../../containers/RentalsContainer'

const Laptop = props => {

    return (
        <div>
            <li>
             <h1>{props.name}</h1>
            </li>
            <RentalsContainer laptop={props}/>
        </div>
    )
}


export default Laptop