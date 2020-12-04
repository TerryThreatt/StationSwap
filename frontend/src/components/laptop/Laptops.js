import React from 'react'
import { Link } from 'react-router-dom'
import Laptop from './Laptop'

const Laptops = props => {

    const { laptops } = props

    const laptopsList = laptops && laptops.map(laptop => {
        return (
            <Laptop key={laptop.id} laptop={laptop}>
                <Link to={`/laptops/${laptop.id}`}>{laptop.name}</Link>
            </Laptop>
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

export default Laptops