export const addToken = (token) => {
    localStorage.setItem('token', token)
}

export const removeToken = () => {
    localStorage.removeItem('token')
}

export const getToken = () => {
    localStorage.getItem('token')
}