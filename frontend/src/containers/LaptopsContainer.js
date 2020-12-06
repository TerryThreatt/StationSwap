import React from 'react'
import Laptops from '../components/laptop/Laptops'
import LaptopInput from '../components/laptop/LaptopInput'

const LaptopsContainer = (props) => {

        const { laptops } = props

        return (

            <div className="laptops">
                <Laptops laptops={laptops} />
                <br/>
                <LaptopInput laptops={laptops} />
            </div>
        )
    }


export default LaptopsContainer