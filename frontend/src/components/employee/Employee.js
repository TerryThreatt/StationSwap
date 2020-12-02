import React from 'react'
import LaptopsContainer from '../../containers/LaptopsContainer'
import RentalsContainer from '../../containers/RentalsContainer'

const Employee = props => {

    let employee = props.employees.filter(employee => employee.id === props.match.params.id)[1]

    return(
        <div>
            {employee}
            <LaptopsContainer employee={employee}/>
            <RentalsContainer employee={employee}/>
        </div>
    )
}

export default Employee