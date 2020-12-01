import React, { Component } from 'react'
import Employees from '../components/employee/Employees'

class EmployeesContainer extends Component {
    componentDidMount(){

    }

    render() {
        return (
            <div>
                <Employees />
            </div>
        )
    }
}

export default EmployeesContainer