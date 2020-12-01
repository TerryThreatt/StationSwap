export const getRentals= () => {
    return (dispatch) => {
        fetch('http://localhost:3000/rentals')
            .then(res => res.json())
            .then(rentals => dispatch({
                type: 'GET_RENTALS',
                payload: rentals
            }))
            .catch(err => console.log(err))
        }
}