import React from 'react'
import LaptopInput from '../components/laptop/LaptopInput'
import Laptops from '../components/laptop/Laptops'
import Laptop from '../components/laptop/Laptop'

const LaptopsContainer = (props) => {

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
                <Laptops laptops={props.Laptops} />
                <LaptopInput laptops={props.laptops} />

            </div>
        )
    }


export default LaptopsContainer