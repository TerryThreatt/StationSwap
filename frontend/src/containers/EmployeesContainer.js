import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Employee from '../components/employee/Employee'
import Employees from '../components/employee/Employees'
import EmployeeInput from '../components/employee/EmployeeInput'
import { getEmployees } from '../actions/getEmployees'



class EmployeesContainer extends Component {

    componentDidMount() {
        this.props.getEmployees()
    }

    render() {
        return (
            <div className="employees">
                <NavBar />
                <Switch>
                    <Route path="/signup" component={EmployeeInput} />
                    <Route path="/signin" component={EmployeeInput}/>
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

const mapStateToProps = state => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, { getEmployees})(EmployeesContainer)