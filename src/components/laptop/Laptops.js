import React from 'react'
import Laptop from './Laptop'
import { Link } from 'react-router-dom'

const Laptops = props => {
    return (
        <div>
            {console.log(props)}
            {props.laptops && props.laptops.map(laptop =>
                    <Laptop key={laptop.id} id={laptop.id} name={laptop.name} specs={laptop.specs} laptop={laptop}>
                        <Link to={`/laptops/${laptop.id}`}>{laptop.name}</Link>
                    </Laptop>
            )}
        </div>
    )
}


export default Laptops