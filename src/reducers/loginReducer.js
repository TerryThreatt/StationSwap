export default function loginReducer(
  state = { signup: {}, login: {} },
  action
) {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        signup: [...state.signup, action.signup],
      };
    case "LOGIN":
      return {
        ...state,
        login: [...state.login, action.login],
      };
    default:
      return state;
  }
}
