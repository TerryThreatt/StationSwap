import Paper from '@mui/material/Paper';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getLaptops } from './actions/laptopActions';
import { getRentals } from './actions/rentalActions';
import './App.css';
import Laptop from './components/laptop/Laptop';
import LaptopInput from './components/laptop/LaptopInput';
import NavBar from './components/NavBar';
import Rental from './components/rental/Rental';
import RentalInput from './components/rental/RentalInput';
import LaptopsContainer from './containers/LaptopsContainer';
import RentalsContainer from './containers/RentalsContainer';
import Welcome from './pages/Welcome';


class App extends Component {

  componentDidMount(){
    this.props.getLaptops()
    this.props.getRentals()
  }


  render() {
    return (
      <div className="App">
        <NavBar title="StationSwap" />
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <Welcome {...routerProps} />}
          />
          <Route
            path="/laptops/new"
            render={(routerProps) => (
              <LaptopInput {...routerProps} laptops={this.props.laptops} />
            )}
          />
          <Route exact path="/laptops">
            <LaptopsContainer laptops={this.props.laptops} />
          </Route>
          <Route
            path="/laptops/:id"
            render={(routerProps) => {
              const laptopId = parseInt(routerProps.match.params.id);

              const laptopObj = this.props.laptops.find(
                (laptop) => laptop.id === laptopId
              );

              if (laptopObj) {
                return (
                  <Laptop
                    key={laptopObj.id}
                    id={laptopObj.id}
                    name={laptopObj.name}
                    specs={laptopObj.specs}
                  />
                );
              } else {
                return <div>Loading...</div>;
              }
            }}
          />
          <Route exact path="/rentals">
            <RentalsContainer
              rentals={this.props.rentals}
              laptops={this.props.laptops}
              likeCounter={this.props.laptops}
            />
          </Route>
          <Route
            path="/rentals/new"
            render={(routerProps) => (
              <div className="rental-input">
              <Paper sx={{ height: 400, width: 300 }}>
                <div id="rental">
                    <RentalInput {...routerProps} laptops={this.props.laptops} />
                </div>
                </Paper>
              </div>
            )}
          />
          <Route
            path="/rentals/:id"
            render={(routerProps) => {
              const rentalId = parseInt(routerProps.match.params.id);

              const rentalObj = this.props.rentals.find(
                (rentalObj) => rentalObj.id === rentalId
              );

              if (rentalObj) {
                return (
                  <Rental
                    key={rentalObj.id}
                    id={rentalObj.id}
                    requestDate={rentalObj.request_date}
                    name={rentalObj.name}
                    email={rentalObj.email}
                  />
                );
              } else {
                return <div>Loading...</div>;
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    laptops: state.laptops,
    rentals: state.rentals
  }
}


export default connect(mapStateToProps, {getLaptops, getRentals})(App)
