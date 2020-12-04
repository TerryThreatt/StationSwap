import React, { Component } from 'react'
import Laptops from '../components/laptop/Laptops'
import Laptop from '../components/laptop/Laptop'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import LaptopInput from '../components/laptop/LaptopInput'
import { getLaptops } from '../actions/laptopActions'


class LaptopsContainer extends Component {

    componentDidMount(){
        this.props.getLaptops()
    }

    render() {
        return (
            <div className="laptops">
                <Switch>
                    <Route path="/laptops/new" component={LaptopInput} />
                    <Route path="/laptops/:id" render={(routerProps) => <Laptop {...routerProps} laptops={this.props.laptops}/>}/>
                    <Route exact path="/laptops" render={(routerProps) => <Laptops {...routerProps} laptops={this.props.laptops}/> } />
                </Switch>

                <Laptops laptops={this.props.laptops} />
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