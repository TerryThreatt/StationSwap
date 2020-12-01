import React from 'react'
import { Link } from 'react-router-dom'


const Laptops = props => {

    return(
        <div>
            {props.laptops.map(laptop =>
            <li key={laptop.id}>
                <Link to={`/laptops/${laptop.id}`}>{laptop.name}</Link>
            </li>)}
        </div>
    )
}

export default Laptops