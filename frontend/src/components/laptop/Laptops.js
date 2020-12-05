import React from 'react'
import { Link } from 'react-router-dom'
import Laptop from './Laptop'

const Laptops = props => {

    const { laptops } = props

    const laptopsList = laptops && laptops.map(laptop => {
        return (
            <li>
                <Laptop key={laptop.id} laptop={laptop}>
                    <Link to={`/laptops/${laptop.id}`}>{laptop.name}</Link>
                </Laptop>
            </li>
        )
    })


    return(
        <div>
            <ul>
                {laptopsList}
            </ul>
        </div>
    )
}

Laptops.defaultProps = {
    laptops: []
}

export default Laptops