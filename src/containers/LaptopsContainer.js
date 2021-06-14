import React from 'react'
import Laptops from '../components/laptop/Laptops'
import Laptop from '../components/laptop/Laptop'

const LaptopsContainer = (props) => {

        <Laptops laptops={props.laptops.laptops} />

        return (

            <div className="laptops">
                <br/>
                {props.laptops.laptops.map(laptop => {
                    return (
                        <Laptop
                            key={laptop.id}
                            id={laptop.id}
                            name={laptop.name}
                            specs={laptop.specs}
                        />
                    )
                })

                }

            </div>
        )
    }


export default LaptopsContainer