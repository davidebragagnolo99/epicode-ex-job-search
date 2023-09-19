const initialState = {
  favouriteCompanies: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_FAVOURITES" && state.favouriteCompanies.content.includes(action.payload)) return state;

  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favouriteCompanies: {
          ...state.favouriteCompanies,
          content: [...state.favouriteCompanies.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favouriteCompanies: {
          ...state.favouriteCompanies,
          content: state.favouriteCompanies.content.filter((companyName, i) => {
            return companyName !== action.payload;
          }),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
