export const addLaptop = laptopInfo => dispatch => {
        fetch(`http://localhost:3000/laptops`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(laptopInfo)
        })
        .then(res => res.json())
        .then(data => dispatch({ type: 'ADD_LAPTOP', payload: data.laptop }))
}


export const getLaptops = () => dispatch => {
    return fetch(`http://localhost:3000/laptops`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => dispatch({type: 'GET_LAPTOPS', payload: data.laptops }))
    }
