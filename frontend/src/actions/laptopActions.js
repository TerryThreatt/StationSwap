
export const getLaptops = () => {
    return (dispatch) => {
        dispatch({ type: 'GETTING_LAPTOPS'})
        return fetch('http://localhost:3000/laptops')
        .then(res => res.json())
        .then(response => {
            dispatch({type: 'GET_LAPTOPS', laptops: response.laptops})
            }
        )
    }
}

export const addLaptop = (laptopInput, history) => {
    return (dispatch) => {
      return fetch('http://localhost:3000/laptops', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(laptopInput)
            }
        )
        .then(res => res.json())
        .then(response => {
            console.log(response)
            dispatch({ type: 'ADD_LAPTOP', laptop: response.laptop })
            history.push(`/laptops/${response.id}`)
        })
    }
}
