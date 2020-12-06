
export const addRental = (rentalInfo, laptopId, history) => dispatch => {
        return fetch(`http://localhost:3001/laptops/${laptopId}/rentals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(rentalInfo)
        })
        .then(res => res.json())
    .then(response => {
        dispatch({ type: 'ADD_RENTAL', rental: response.data })
        history.push(`/laptops/${laptopId}/${response.id}`)

    })
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
            .then(response => dispatch({ type: 'GET_RENTALS', rentals: response.data}))
            .catch(err => console.log(err))
}