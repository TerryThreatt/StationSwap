import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'

import Employee from '../components/employee/Employee'
import Employees from '../components/employee/Employees'
import EmployeeInput from '../components/SignIn'
import { getEmployees } from '../actions/getEmployees'



class EmployeesContainer extends Component {

    componentDidMount() {
        this.props.getEmployees()
    }

    render() {
        return (
            <div className="employees">
                <NavBar />



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