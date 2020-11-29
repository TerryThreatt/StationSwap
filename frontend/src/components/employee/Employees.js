import React from 'react'


const Employees = props => {
    return(
        <div>
            {props.employees.map(employee =>
            <li key={employee.id}>
                Link 
            </li>)}
        </div>
    )
}

export default Employees