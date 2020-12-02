import React, { Component } from 'react'
import { connect } from 'react-redux'
import Employee from '../components/employee/Employee'
import { getEmployees } from '../actions/getEmployees'



class EmployeesContainer extends Component {

    componentDidMount() {
        this.props.getEmployees()
    }

    render() {
        return (
            <div className="employees">
                <Employee employees={this.props.employees} history={this.props.history}/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, { getEmployees })(EmployeesContainer)