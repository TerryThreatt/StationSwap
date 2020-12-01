import React, { Component } from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Employee from './employee/Employee'
import Employees from './employee/Employees'
import NavInput from './NavInput'
import { getEmployees } from '../actions/getEmployees'



class Dashboard extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="dashboard">
                <NavBar />
                <Switch>
                    <Route path="/signup" component={NavInput} />
                    <Route path="/signin" component={NavInput}/>
                    <Route path="/employees/:id" render={(routerProps) => <Employee {...routerProps} employees={this.props.employees}/>}/>
                    <Route exact path="/employees" render={(routerProps) => <Employees {...routerProps} employees={this.props.employees}/> } />
                </Switch>
                <br/>
                <br/>
                StationSwap - Laptop rental app for remote teams

            </div>
        )
    }
}

export default Dashboard