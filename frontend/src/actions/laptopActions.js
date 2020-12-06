
export const getLaptops = () => {
    return (dispatch) => {
        dispatch({ type: 'GETTING_LAPTOPS'})
        return fetch('http://localhost:3000/laptops')
        .then(res => res.json())
        .then(response => {
            dispatch({type: 'GET_LAPTOPS', laptops: response})
            return response
            }
        )
    }
}

export const addLaptop = (laptopInfo) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/laptops`, {
            method: "POST",
            header: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(laptopInfo)
    })
        .them(res => res.json())
        .then(response => {
            dispatch({ type: 'ADD_LAPTOP', laptop: response})
        })
    }
}
