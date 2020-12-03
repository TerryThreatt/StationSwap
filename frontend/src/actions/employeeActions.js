const setEmployee = (payload) =>({ type: "SET_EMPLOYEE ", payload})

export const logEmployeeOut = () => ({ type: "LOG_OUT_EMPLOYEE"})

export const signEmployeeIn = (employeeInfo, browserHistory) => dispatch => {
    fetch(`http://localhost:3000/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(employeeInfo)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setEmployee(data.employee))
        browserHistory.push(`/employees/${data.employee.id}`)
    })
}

export const signEmployeeUp = (employeeInfo, browserHistory) => dispatch => {
    fetch(`http://localhost:3000/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(employeeInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("token", data.token)
        dispatch(setEmployee(data.employee))
        browserHistory.push(`/employees/${data.employee.id}`)
    })
}

export const getEmployees = () => dispatch => {
        fetch(`http://localhost:3000/employees`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },

        })
            .then(res => res.json())
            .then(data => dispatch({type: 'GET_EMPLOYEES', payload: data.employees}))
}

export const autoLogin = () => dispatch => {
    fetch(`http://localhost:3000/auto_login`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setEmployee(data.employee))
    })
}
