export const getLaptops = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/laptops')
            .then(res => res.json())
            .then(laptops => dispatch({
                type: 'GET_LAPTOPS',
                payload: laptops
            }))
            .catch(err => console.log(err))
        }
}