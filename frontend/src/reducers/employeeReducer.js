const initialState = {
    loggedIn: false,
    employees: [],
    employee: {}
}


export default function employeeReducer(state = initialState, action) {
    switch(action.type){
        case 'GET_EMPLOYEES':
            return {employees: action.payload}
        case 'SET_EMPLOYEE':
            return {...state, loggedIn: true, employees: [...state.employees, action.payload], employee: {...action.payload}}
        case 'LOG_OUT_EMPLOYEE':
            localStorage.clear()
            return {...state, loggedIn: false, employee: {}}
        default:
        return state
    }
}