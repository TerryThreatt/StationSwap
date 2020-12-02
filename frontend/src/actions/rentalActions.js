
export const addRental = (rentalInfo, employeeId) => dispatch => {
        fetch(`http://localhost:3000/employees/${employeeId}/rentals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(rentalInfo)
        })
        .then(res => res.json())
        .then(data => dispatch({ type: 'ADD_RENTAL', payload: data }))
        .catch(err => console.log(err))
}

export const getRentals = () => dispatch => {
        fetch(`http://localhost:3000/rentals`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
            .then(res => res.json())
            .then(data => dispatch({ type: 'GET_RENTALS', payload: data
            }))
            .catch(err => console.log(err))
}