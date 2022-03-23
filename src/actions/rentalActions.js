const BACKEND_URL = "https://stationswap-backend.herokuapp.com";

export const getRentals = () => {
  return (dispatch) => {
    dispatch({ type: "GETTING_RENTALS" });
    return fetch(`${BACKEND_URL}/rentals`)
      .then((res) => res.json())
      .then((response) => {
        dispatch({ type: "GET_RENTALS", rentals: response.rentals });
        return response;
      });
  };
};

export const addRental = (rentalInfo) => {
  return (dispatch) => {
    return fetch(`${BACKEND_URL}/rentals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rentalInfo),
    })
      .then((res) => res.json())
      .then((response) => {
        dispatch({ type: "ADD_RENTAL", rental: response.rental });
        return response;
      });
  };
};
