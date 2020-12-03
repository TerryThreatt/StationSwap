import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Laptops from './components/laptop/Laptops'
import Rentals from './components/rental/Rentals'
import EmployeesContainer from './containers/EmployeesContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
            <h1>StationSwap</h1>
            <h3>Laptop Rental App for Remote Teams</h3>
            <br/>
            <Switch>
                <Route exact path="/" render={(routerProps) => <SignIn {...routerProps} history={routerProps.history }/>} />
                <Route path="/signup" render={(routerProps) => <SignUp {...routerProps} history={routerProps.history }/>} />
                <Route path="/signin" render={(routerProps) => <SignIn {...routerProps} history={routerProps.history }/>}/>
                <Route path="/employees/:id" render={(routerProps) => <EmployeesContainer {...routerProps} history={routerProps.history}/>}/>
                <Route exact path="/laptops" render={(routerProps) => <Laptops history={routerProps.history}/>}/>
                <Route exact path="/rentals" render={(routerProps) => <Rentals history={routerProps.history}/>}/>
            </Switch>

      </div>
    );
  }
}

export default App
