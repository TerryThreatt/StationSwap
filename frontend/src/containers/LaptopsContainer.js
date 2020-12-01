import React, { Component } from 'react'
import Laptops from '../components/laptop/Laptops'
import { connect } from 'react-redux'
import { getLaptops } from '../actions/getLaptops'
import LaptopInput from '../components/laptop/LaptopInput'

class LaptopsContainer extends Component {

    componentDidMount(){
        this.props.getLaptops()
    }

    render() {
        return (
            <div>
                <LaptopInput laptops={this.props.laptops} />
                <Laptops laptops={this.props.laptops}/>
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