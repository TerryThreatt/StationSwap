import React, { Component } from 'react'
import Rentals from '../components/rental/Rentals'
import Rental from '../components/rental/Rental'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import RentalInput from '../components/rental/RentalInput'
import { getRentals } from '../actions/rentalActions'

class RentalsContainer extends Component {

    componentDidMount(){
        this.props.getRentals()
    }

    Loading = () => {
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return (
                  <div className="RentalContainer">
                    <Rentals rentals={this.props.rentals} />
                    <Rental rentals={this.props.rentals} />
                    <RentalInput rentals={this.props.rentals} />
                  </div>
          )
        }
      }

    render() {
        return (
            <div className="RentalsContainer">
                {this.Loading()}
                {console.log(this.props)}

                <Switch>
                    <Route exact path="/rentals/new" render={(routerProps) => <RentalInput {...routerProps} rentals={this.props.rentals} />}/>
                    <Route exact path="/rentals" render={(routerProps) => <Rentals {...routerProps} rentals={this.props.rentals} />}/>
                    <Route path="/rentals/:id" render={(routerProps) => <Rental {...routerProps} rentals={this.props.rental} />}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rentals: state.rentals.rentals
    }
}

export default connect(mapStateToProps, { getRentals })(RentalsContainer)