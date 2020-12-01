import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Employee from './components/employee/Employee'
import Laptops from './components/laptop/Laptops'
import Rentals from './components/rental/Rentals'

class App extends Component {

  render() {

    return (
      <div className="App">
            <Switch>
                <Route exact path="/" render={(routerProps) => <SignIn history={routerProps.history }/>} />
                <Route path="/signup" render={(routerProps) => <SignUp history={routerProps.history }/>} />
                <Route path="/signin" render={(routerProps) => <SignIn history={routerProps.history }/>}/>
                <Route path="/employees/:id" render={(routerProps) => <Employee history={routerProps.history}/>}/>
                <Route exact path="/laptops" render={(routerProps) => <Laptops history={routerProps.history}/>}/>
                <Route exact path="/rentals" render={(routerProps) => <Rentals history={routerProps.history}/>}/>
            </Switch>
      </div>
    );
  }
}

export default App
