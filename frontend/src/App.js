import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Laptops from './components/laptop/Laptops'
import Rentals from './components/rental/Rentals'
import LaptopsContainer from './containers/LaptopsContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
            <h1>StationSwap</h1>
            <h3>Laptop Rental App for Remote Teams</h3>
            <br/>
            <Switch>
                <Route exact path="/" render={(routerProps) => <LaptopsContainer history={routerProps.history}/>} />
                <Route exact path="/laptops" render={(routerProps) => <Laptops history={routerProps.history}/>}/>
                <Route exact path="/rentals" render={(routerProps) => <Rentals history={routerProps.history}/>}/>
            </Switch>

      </div>
    );
  }
}

export default App
