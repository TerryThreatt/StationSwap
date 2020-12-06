import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Laptop from './components/laptop/Laptop'
import Rental from './components/rental/Rental'
import LaptopInput from './components/laptop/LaptopInput'
import RentalInput from './components/rental/RentalInput'
import LaptopsContainer from './containers/LaptopsContainer';
import RentalsContainer from './containers/RentalsContainer';
import { connect } from 'react-redux'
import { getLaptops } from './actions/laptopActions'
import NavBar from './components/NavBar'


class App extends Component {

  componentDidMount(){
    this.props.getLaptops()
  }

  render() {

    return (
      <div className="App">
            <NavBar title="StationSwap" />
                <br/>
                <h1>StationSwap</h1>
                <h3>Laptop Rental App for Remote Teams</h3>
                <br/>
            <LaptopsContainer laptops={this.props.laptops}/>

            <Switch>
                <Route exact path="/laptops/new" component={LaptopInput}/>
                <Route exact path="/laptops" component={LaptopsContainer}/>
                <Route path="/laptops/:id" component={Laptop}/>
                <Route exact path="/rentals/new" component={RentalInput}/>
                <Route exact path="/rentals" component={RentalsContainer}/>
                <Route path="/rentals/:id" component={Rental}/>
            </Switch>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    laptops: state.laptops
  }
}

export default connect(mapStateToProps, { getLaptops })(App)
