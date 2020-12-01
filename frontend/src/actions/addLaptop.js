export const addLaptop = data => {
    return (dispatch) => {
        fetch('http://localhost:3000/laptop', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(laptop => dispatch({ type: 'ADD_LAPTOP', payload: laptop }))
        .catch(err => console.log(err))
    }
}