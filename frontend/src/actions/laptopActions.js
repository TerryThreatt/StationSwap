import axios from 'axios'

export const getLaptops = () => dispatch => {
    axios.get('http://localhost:3000/laptops')
        .then(data => dispatch({type: 'GET_LAPTOPS', payload: data.data}))
}

export const addLaptop = laptopInfo => dispatch => {
      axios.post(`http://localhost:3000/laptops`, {laptopInfo})
        .then(data => dispatch({ type: 'ADD_LAPTOP', payload: data.data }))
}
