import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Laptop from './components/laptop/Laptop'
import LaptopInput from './components/laptop/LaptopInput'
import LaptopsContainer from './containers/LaptopsContainer';
import { connect } from 'react-redux'
import { getLaptops } from './actions/laptopActions'
import NavBar from './components/NavBar'
import RentalInput from './components/rental/RentalInput';
import RentalsContainer from './containers/RentalsContainer';
import Rental from './components/rental/Rental'
import { getRentals } from './actions/rentalActions'



class App extends Component {

  componentDidMount(){
    this.props.getLaptops()
    this.props.getRentals()
  }

  // Loading = () => {
  //   if(this.props.loading) {
  //     return <div>Loading...</div>
  //   } else {
  //     return (
  //             <div>
  //               {/* <Laptop laptops={this.props}/> */}
  //               <LaptopInput />
  //             </div>
  //     )
  //   }
  // }

  render() {

    return (
      <div className="App">
            <NavBar title="StationSwap" />
                <br/>
                <h1>StationSwap</h1>
                <h3>Laptop Rental App for Remote Teams</h3>
                <br/>
                {/* {this.Loading()} */}

            <Switch>
                <Route exact path="/" render={(routerProps) => <LaptopInput {...routerProps} laptops={this.props.laptops} />}/>
                <Route path="/laptops/new" render={(routerProps) => <LaptopInput {...routerProps} laptops={this.props.laptops} />}/>
                <Route exact path="/laptops">
                  <LaptopsContainer laptops={this.props.laptops} />
                </Route>
                <Route path="/laptops/:id" render={(routerProps) => {
                  const laptopId = parseInt(routerProps.match.params.id)

                  const laptopObj = this.props.laptops.find(laptop => laptop.id === laptopId)

                  if (laptopObj) {
                    return (<Laptop
                                key={laptopObj.id}
                                id={laptopObj.id}
                                name={laptopObj.name}
                                specs={laptopObj.specs}
                    />
                  )
                    } else {
                      return <div>Loading...</div>
                    }
                     } }/>
                <Route exact path="/rentals">
                  <RentalsContainer rentals={this.props.rentals} laptops={this.props.laptops}/>
                </Route>
                <Route path="/rentals/new" render={(routerProps) => <RentalInput {...routerProps} laptops={this.props.laptops} />}/>
                <Route path="/rentals/:id" render={(routerProps) => {
                    const rentalId = parseInt(routerProps.match.params.id)

                    const rentalObj = this.props.rentals.find(rentalObj => rentalObj.id === rentalId)

                    if (rentalObj) {
                        return (<Rental
                                    key={rentalObj.id}
                                    id={rentalObj.id}
                                    requestDate={rentalObj.request_date}
                                    name={rentalObj.name}
                                    email={rentalObj.email}
                        />
                    )
                        } else {
                        return <div>Loading...</div>
                        }
                        } }/>
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
