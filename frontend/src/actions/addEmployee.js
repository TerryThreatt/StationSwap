import { addToken } from '../actions/tokens'
export const addEmployee = (data, browserHistory) => {
    return (dispatch) => {
        fetch('http://localhost:3000/auth/signup', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(employee => {
            addToken(employee.jwt)
            dispatch({ type: 'ADD_EMPLOYEE', payload: employee })
            browserHistory.push(`/employees/${employee.id}`)
        })
        .catch(err => console.log(err))
    }
}