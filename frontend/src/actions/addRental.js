
export const addRental = (data, employeeId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/employees/${employeeId}/rentals`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(rental => dispatch({ type: 'ADD_RENTAL', payload: rental }))
        .catch(err => console.log(err))
    }
}