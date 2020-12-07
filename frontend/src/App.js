import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Laptop from './components/laptop/Laptop'
import Laptops from './components/laptop/Laptops'
import LaptopInput from './components/laptop/LaptopInput'
import LaptopsContainer from './containers/LaptopsContainer';
import { connect } from 'react-redux'
import { getLaptops } from './actions/laptopActions'
import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount(){
    this.props.getLaptops()
  }

  Loading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return (
              <div>
                <LaptopsContainer laptops={this.props.laptops} />
                <Laptops laptops={this.props.laptops} />
                <Laptop laptops={this.props.laptops} />
              </div>
      )
    }
  }

  render() {

    return (
      <div className="App">
            <NavBar title="StationSwap" />
                <br/>
                <h1>StationSwap</h1>
                <h3>Laptop Rental App for Remote Teams</h3>
                <br/>
                {this.Loading()}
                
            <Switch>
                <Route exact path="/" render={(routerProps) => <Laptops {...routerProps} laptops={this.props.laptops} />}/>
                <Route exact path="/laptops/new" render={(routerProps) => <LaptopInput {...routerProps} laptops={this.props.laptops} />}/>
                <Route exact path="/laptops" render={(routerProps) => <Laptops {...routerProps} laptops={this.props.laptops} />}/>
                <Route path="/laptops/:id" render={(routerProps) => <Laptop {...routerProps} laptops={this.props.laptops} />}/>
            </Switch>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    laptops: state.laptops.laptops
  }
}

export default connect(mapStateToProps, {getLaptops})(App)
