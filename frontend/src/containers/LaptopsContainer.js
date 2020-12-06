import React from 'react'
import Laptops from '../components/laptop/Laptops'
import LaptopInput from '../components/laptop/LaptopInput'
import { Link } from 'react-router-dom'


const LaptopsContainer = (props) => {

        const { laptops } = props

        return (
            <div className="laptops">
                <Laptops laptops={laptops} />
                <br/>
                <LaptopInput />
            </div>
        )
    }


export default LaptopsContainer