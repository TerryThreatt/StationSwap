import Paper from "@mui/material/Paper";
import "dotenv/config";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getLaptops } from "./actions/laptopActions";
import { getRentals } from "./actions/rentalActions";
import "./App.css";
import Laptop from "./components/laptop/Laptop";
import LaptopInput from "./components/laptop/LaptopInput";
import NavBar from "./components/NavBar";
import Rental from "./components/rental/Rental";
import RentalInput from "./components/rental/RentalInput";
import LaptopsContainer from "./containers/LaptopsContainer";
import RentalsContainer from "./containers/RentalsContainer";
import { supabase } from "../src/components/login/supabaseClient";
import Auth from "./components/login/Auth";
import Account from "./components/login/Account";

export const App = (props) => {
  const [session, setSession] = useState(null);
  const [laptops, setLaptops] = useState([]);
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const { getLaptops, getRentals } = props;

  console.log(props)

  useEffect(() => {
    async function fetchData() {
      const l = await getLaptops();
      const r = await getRentals();
      setLaptops(l);
      setRentals(r);
    }
    fetchData();
  }, [getLaptops, getRentals]);

  return (
    <div className="App">
      <NavBar title="StationSwap" session={session} />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
              <div className="landing-page">
                <div id="landing-text">
                  <h1>Welcome!</h1>
                  <h3>Laptop Rentals for Remote Teams</h3>
                </div>

                <div id="user-input">
                  <div id="login">
                    {!session ? (
                      <Auth />
                    ) : (
                      <Account key={session.user.id} session={session} />
                    )}
                  </div>
                </div>
              </div>
          )}
        />
        <Route
          path="/laptops/new"
          render={(routerProps) => (
            <LaptopInput {...routerProps} laptops={laptops} />
          )}
        />
        <Route exact path="/laptops">
          <LaptopsContainer laptops={laptops} />
        </Route>
        <Route
          path="/laptops/:id"
          render={(routerProps) => {
            const laptopId = parseInt(routerProps.match.params.id);

            const laptopObj = laptops.find((laptop) => laptop.id === laptopId);

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
          <RentalsContainer rentals={rentals} laptops={laptops} />
        </Route>
        <Route
          path="/rentals/new"
          render={(routerProps) => (
            <div className="rental-input">
              <Paper sx={{ height: 400, width: 300 }}>
                <div id="rental">
                  <RentalInput {...routerProps} laptops={laptops} />
                </div>
              </Paper>
            </div>
          )}
        />
        <Route
          path="/rentals/:id"
          render={(routerProps) => {
            const rentalId = parseInt(routerProps.match.params.id);

            const rentalObj = rentals.find(
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
};

const mapStateToProps = (state) => {
  return {
    laptops: state.laptops,
    rentals: state.rentals,
  };
};

export default connect(mapStateToProps, { getLaptops, getRentals })(App);
