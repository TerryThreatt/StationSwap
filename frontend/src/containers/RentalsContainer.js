import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Rentals from '../components/rental/Rentals'
import Rental from '../components/rental/Rental'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import RentalInput from '../components/rental/RentalInput'
import { getRentals } from '../actions/getRentals'

class RentalsContainer extends Component {

    componentDidMount(){
        this.props.getRentals()
    }

    render() {
        return (
            <div className="rentals">
                <NavBar />
                <Switch>
                    <Route path="/rentals/new" component={RentalInput} />
                    <Route path="/rentals/:id" render={(routerProps) => <Rental {...routerProps} rentals={this.props.rentals}/>}/>
                    <Route exact path="/rentals" render={(routerProps) => <Rentals {...routerProps} rentals={this.props.rentals}/> } />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rentals: state.rentals
    }
}

export default connect(mapStateToProps, { getRentals })(RentalsContainer)