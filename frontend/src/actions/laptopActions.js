
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

export const addLaptop = (laptopInfo, browserHistory) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/laptops`, {
            method: "POST",
            header: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(laptopInfo)
    })
        .then(res => res.json())
        .then(response => {
            dispatch({ type: 'ADD_LAPTOP', laptop: response})
            browserHistory.push(`/laptops/${response.id}`)
            return response
        })
    }
}
