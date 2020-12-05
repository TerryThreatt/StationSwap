import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Laptops from './components/laptop/Laptops'
import Rentals from './components/rental/Rentals'
// import LaptopsContainer from './containers/LaptopsContainer';
import Home from './components/Home'

class App extends Component {

  render() {

    return (
      <div className="App">
            <Switch>
                {/* <Route exact path="/" render={(routerProps) => <LaptopsContainer history={routerProps.history}/>} /> */}
                <Route exact path="/" component={Home}/>
                <Route exact path="/laptops" render={(routerProps) => <Laptops history={routerProps.history}/>}/>
                <Route exact path="/rentals" render={(routerProps) => <Rentals history={routerProps.history}/>}/>
            </Switch>

      </div>
    );
  }
}

export default App
