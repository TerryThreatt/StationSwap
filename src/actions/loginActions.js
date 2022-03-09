const BACKEND_URL = "https://stationswap-backend.herokuapp.com";

export const login = (loginInput) => {
  return (dispatch) => {
    return fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInput),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        dispatch({ type: "LOGIN", login: response.login });
      });
  };
};

export const signup = (signinInput) => {
  return (dispatch) => {
    return fetch(`${BACKEND_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signinInput),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        dispatch({ type: "SIGNUP", signup: response.signup });
      });
  };
};
