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

    export const addRental = (rentalInfo, laptopId, browserHistory) => {
        const rentalData = {rental: rentalInfo}
        return (dispatch) => {
        return fetch(`http://localhost:3000/laptops/${laptopId}/rentals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rentalData)
        })
        .then(res => res.json())
        .then(response => {
            dispatch({ type: 'ADD_RENTAL', rental: response.rental})
            browserHistory.push(`/laptops/${laptopId}/${response.rental.id}`, response)
            return response
        })
    }
}
