
export const getLaptops = () => {
    return (dispatch) => {
        dispatch({ type: 'GETTING_LAPTOPS'})
        return fetch('http://localhost:3000/laptops')
        .then(res => res.json())
        .then(response => {
            dispatch({type: 'GET_LAPTOPS', laptops: response})
            }
        )
    }
}

export const addLaptop = (laptopForm, history) => {
    const {name, specs} = laptopForm
    const laptop = {laptop: {name: name, specs: specs}}

    return (dispatch) => {
      return fetch('http://localhost:3000/laptops', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(laptop)
    })
        .then(res => res.json())
        .then(response => {
            dispatch({ type: 'ADD_LAPTOP', laptop: response})
            history.push(`/laptops/${response.id}`, response)
        })
    }
}
