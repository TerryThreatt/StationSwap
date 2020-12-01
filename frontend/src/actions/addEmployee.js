export const addEmployee = data => {
    return (dispatch) => {
        fetch('http://localhost:3000/employees', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(employee => dispatch({ type: 'ADD_EMPLOYEE', payload: employee }))
        .catch(err => console.log(err))
    }
}