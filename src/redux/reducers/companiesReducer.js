import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING, GET_JOBS_SUBMIT } from "../actions";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  isSubmit: false,
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    case GET_JOBS_SUBMIT:
      return {
        ...state,
        isSubmit: action.payload,
      };
    default:
      return state;
  }
};

export default companiesReducer;
