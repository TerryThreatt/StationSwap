import React from 'react'
import LaptopsContainer from '../containers/LaptopsContainer'
import NavBar from './NavBar'

const Home = () => {
    return (
        <div>
            <NavBar title="StationSwap" />
            <br/>
            <h1>StationSwap</h1>
            <h3>Laptop Rental App for Remote Teams</h3>
            <br/>
            <LaptopsContainer />
        </div>
    )
}

export default Home
