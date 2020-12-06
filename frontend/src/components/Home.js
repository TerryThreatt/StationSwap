import React, { Component } from 'react'
import LaptopsContainer from '../containers/LaptopsContainer'
import NavBar from './NavBar'
import { getLaptops } from '../actions/laptopActions'
import { connect } from 'react-redux'

class Home extends Component {

    

    render() {

        return (
            <div>
                <NavBar title="StationSwap" />
                <br/>
                <h1>StationSwap</h1>
                <h3>Laptop Rental App for Remote Teams</h3>
                <br/>
                <LaptopsContainer laptops={this.props.laptops}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        laptops: state.laptops
    }
}

export default connect(mapStateToProps, { getLaptops })(Home)
