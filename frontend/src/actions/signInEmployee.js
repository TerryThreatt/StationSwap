import { addToken } from '../actions/tokens'

export const signInEmployee = (data, browserHistory) => {
    return (dispatch) => {
        fetch('http://localhost:3000/auth/signin', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(employee => {
            addToken(employee)
            console.log(employee)
            dispatch({ type: 'SIGN_IN_EMPLOYEE', payload: employee })
            browserHistory.push(`/employees/${employee.id}`)

        })
        .catch(err => alert(err))
    }
}