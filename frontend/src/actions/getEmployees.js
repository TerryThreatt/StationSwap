import { getToken } from '../actions/tokens'


export const getEmployees = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/employees', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': getToken
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(employees => dispatch({
                type: 'GET_EMPLOYEES',
                payload: employees
            }))
            .catch(err => console.log(err))
        }
}