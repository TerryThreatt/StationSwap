import React from 'react'
import Rentals from '../components/rental/Rentals'
import Rental from '../components/rental/Rental'
// import { connect } from 'react-redux'
// import { Route, Switch } from 'react-router-dom'
// import RentalInput from '../components/rental/RentalInput'
// import { getRentals } from '../actions/rentalActions'

// class RentalsContainer extends Component {

//     componentDidMount(){
//         this.props.getRentals()
//     }

//     Loading = () => {
//         if(this.props.loading) {
//           return <div>Loading...</div>
//         } else {
//           return (
//                   <div className="RentalContainer">
//                     <Rentals rentals={this.props.rentals} />
//                     {/* <RentalInput rentals={this.props.rentals} /> */}
//                   </div>
//           )
//         }
//       }

//     render() {
//         return (
//             <div className="RentalsContainer">
//                 {this.Loading()}
//                 {console.log(this.props)}
//                 <Switch>
//                     {/* <Route path="/rentals/new" render={(routerProps) => <RentalInput {...routerProps} rentals={this.props.rentals} />}/>
//                     <Route exact path="/rentals">
//                         <Rentals rentals={this.props.laptops} />
//                     </Route> */}
//                     {/* <Route path="/rentals/:id" render={(routerProps) => {
//                     const rentalId = parseInt(routerProps.match.params.id)

//                     const rentalObj = this.props.rentals.find(rentalObj => rentalObj.id === rentalId)

//                     if (rentalObj) {
//                         return (<Rental
//                                     key={rentalObj.id}
//                                     id={rentalObj.id}
//                                     requestDate={rentalObj.request_date}
//                                     name={rentalObj.name}
//                                     email={rentalObj.email}
//                         />
//                     )
//                         } else {
//                         return <div>Loading...</div>
//                         }
//                         } }/> */}
//                 </Switch>

//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//     return {
//         rentals: state.rentals
//     }
// }

// export default connect(mapStateToProps, { getRentals })(RentalsContainer)

const RentalsContainer = (props) => {

    <Rentals rentals={props.rentals.rentals} />

    return (

        <div className="rentals">
            <br/>
            {props.rentals.rentals.map(rental => {
                return (
                    <Rental
                        key={rental.id}
                        id={rental.id}
                        requestDate={rental.request_date}
                        name={rental.name}
                        email={rental.email}
                        laptop={rental.laptop.name}
                    />
                )
            })

                }

        </div>
    )
}


export default RentalsContainer