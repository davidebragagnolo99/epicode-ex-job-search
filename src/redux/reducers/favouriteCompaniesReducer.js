import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const favouriteCompaniesReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_FAVOURITES && state.content.includes(action.payload)) return state;

  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        content: state.content.filter((companyName, i) => {
          return companyName !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default favouriteCompaniesReducer;
