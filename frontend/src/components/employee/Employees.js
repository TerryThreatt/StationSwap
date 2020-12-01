import React from 'react'
import { Link } from 'react-router-dom'

const Employees = props => {

    return(
        <div>
            {props.employees.map(employee =>
            <li key={employee.id}>
                <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
            </li>)}
        </div>
    )
}

export default Employees