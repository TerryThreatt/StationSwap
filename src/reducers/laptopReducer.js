export default function laptopReducer(
  state = { laptops: [], laptop: {}, loading: false },
  action
) {
  switch (action.type) {
    case "GETTING_LAPTOPS":
      return { ...state, laptops: [...state.laptops], loading: true };
    case "GET_LAPTOPS":
      return { ...state, laptops: action.laptops, loading: false };
    case "ADD_LAPTOP":
      return {
        ...state,
        laptops: [...state.laptops, action.laptop],
        laptop: { ...action.laptop },
      };
    default:
      return state;
  }
}
