
export const addRental = (rentalInfo, laptopId) => dispatch => {
        return fetch(`http://localhost:3001/laptops/${laptopId}/rentals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(rentalInfo)
        })
        .then(res => res.json())
        .then(data => dispatch({ type: 'ADD_RENTAL', payload: data.rental }))
        .catch(err => console.log(err))
}

export const getRentals = () => dispatch => {
        return fetch(`http://localhost:3001/rentals`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => dispatch({ type: 'GET_RENTALS', payload: data.rentals}))
            .catch(err => console.log(err))
}