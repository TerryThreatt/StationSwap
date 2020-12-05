import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Laptop from './components/laptop/Laptop'
import Rental from './components/rental/Rental'
import Home from './components/Home'
import LaptopInput from './components/laptop/LaptopInput'
import RentalInput from './components/rental/RentalInput'
import LaptopsContainer from './containers/LaptopsContainer';
import RentalsContainer from './containers/RentalsContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
            <Switch>
                <Route exact path="/" component={Home}/>
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

export default App
