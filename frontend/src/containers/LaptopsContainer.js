import React from 'react'
import Laptops from '../components/laptop/Laptops'
import LaptopInput from '../components/laptop/LaptopInput'
import Laptop from '../components/laptop/Laptop'
const LaptopsContainer = (props) => {

        const { laptops } = props
        return (

            <div className="laptops">
                <br/>
                <LaptopInput laptops={laptops} />
            </div>
        )
    }


export default LaptopsContainer