export const addLaptop = laptopInfo => dispatch => {
        fetch(`http://localhost:3000/laptops`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(laptopInfo)
        })
        .then(res => res.json())
        .then(data => dispatch({ type: 'ADD_LAPTOP', payload: data }))
}


export const getLaptops = () => dispatch => {
    fetch(`http://localhost:3000/laptops`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        .then(res => res.json())
        .then(data => dispatch({type: 'GET_LAPTOPS', payload: data }))
    }