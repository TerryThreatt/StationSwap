export const getRentals = () => {
        return (dispatch) => {
            dispatch({ type: 'GETTING_RENTALS'})
            return fetch('http://localhost:3000/rentals')
            .then(res => res.json())
            .then(response => {
                dispatch({ type: 'GET_RENTALS', rentals: response.rentals})
                return response
            }
        )
    }
}

    export const addRental = (rentalInfo, history) => {
        return (dispatch) => {
        return fetch(`http://localhost:3000/rentals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rentalInfo)
            }
        )
        .then(res => res.json())
        .then(response => {
            console.log(rentalInfo)
            dispatch({ type: 'ADD_RENTAL', rental: response.rental})
            // history.push(`/rentals/${response.id}`, null)
        })
    }
}
