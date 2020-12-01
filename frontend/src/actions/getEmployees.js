export const getEmployees = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/employees')
            .then(res => res.json())
            .then(employees => dispatch({
                type: 'GET_EMPLOYEES',
                payload: employees
            }))
            .catch(err => console.log(err))
        }
}