import React from 'react'
import { Link } from 'react-router-dom'


const Laptops = props => {

    return(
        <div>
            <ul>
                {props.laptops.map(laptop =>
                <li key={laptop.id}>
                    <Link to={`/laptops/${laptop.id}`}>{laptop.name}</Link>
                </li>)}
            </ul>
        </div>
    )
}

export default Laptops