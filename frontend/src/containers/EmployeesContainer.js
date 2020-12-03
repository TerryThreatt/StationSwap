import React, { Component } from 'react'
import { connect } from 'react-redux'
import Employees from '../components/employee/Employees'
import { getEmployees } from '../actions/employeeActions'



class EmployeesContainer extends Component {

    componentDidMount() {
        this.props.getEmployees()
    }


    render() {
        console.log(this.props)

        return (
            <div className="employees">

                <Employees employees={this.props.employees} history={this.props.history}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employees,
        employee: state.employee
    }
}

export default connect(mapStateToProps, { getEmployees })(EmployeesContainer)