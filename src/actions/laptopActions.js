const BACKEND_URL = "https://stationswap-backend.herokuapp.com";

export const getLaptops = () => {
  return (dispatch) => {
    dispatch({ type: "GETTING_LAPTOPS" });
    return fetch(`${BACKEND_URL}/laptops`)
      .then((res) => res.json())
      .then((response) => {
        dispatch({ type: "GET_LAPTOPS", laptops: response.laptops });
        return response;
      });
  };
};

export const addLaptop = (laptopInput) => {
  return (dispatch) => {
    return fetch(`${BACKEND_URL}/laptops`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(laptopInput),
    })
      .then((res) => res.json())
      .then((response) => {
        dispatch({ type: "ADD_LAPTOP", laptop: response.laptop });
        return response;
      });
  };
};
