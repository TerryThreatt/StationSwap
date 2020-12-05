import React, { Component } from 'react'
import Laptops from '../components/laptop/Laptops'
import Laptop from '../components/laptop/Laptop'
import { connect } from 'react-redux'
import LaptopInput from '../components/laptop/LaptopInput'
import { getLaptops } from '../actions/laptopActions'


class LaptopsContainer extends Component {

    componentDidMount(){
        this.props.getLaptops()
        debugger
    }

    render() {
        return (
            <div className="laptops">
                <Laptops laptops={this.props.laptops} />
                <Laptop laptops={this.props.laptops} />
                <h3>Add new laptop</h3>
                <LaptopInput />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        laptops: state.laptops
    }
}

export default connect(mapStateToProps, { getLaptops })(LaptopsContainer)