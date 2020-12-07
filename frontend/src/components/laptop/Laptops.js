import React from 'react'
import { Link } from 'react-router-dom'
import Laptop from './Laptop'

const Laptops = props => {

    return (
        <div>
            {props.laptops && props.laptops.map(laptop =>
                    <Laptop key={laptop.id} laptop={laptop}>
                        <Link to={`/laptops/${laptop.id}`}>{laptop.name}</Link>
                    </Laptop>
            )}
        </div>
    )
}


export default Laptops