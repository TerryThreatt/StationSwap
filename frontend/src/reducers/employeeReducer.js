export default function employeeReducer(state = {employees: []}, action) {
    switch(action.type){
        case 'GET_EMPLOYEES':
            return {employees: action.payload}
        case 'ADD_EMPLOYEE':
            return {...state, employees: [...state.employees, action.payload]}
        default:
        return state
    }
}