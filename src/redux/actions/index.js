export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_SUBMIT = "GET_JOBS_SUBMIT";

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data.company_name,
  };
};

export const removeFromFavouritesAction = (data) => {
  return { type: REMOVE_FROM_FAVOURITES, payload: data.company_name };
};

export const getJobsSubmitAction = (data) => {
  return {
    type: GET_JOBS_SUBMIT,
    payload: data,
  };
};

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      console.log(getState);
      dispatch({
        type: GET_JOBS_LOADING,
        payload: true,
      });
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=10");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_JOBS_LOADING,
            payload: false,
          });
        }, 500);
      } else {
        alert("Error fetching results");
        setTimeout(() => {
          dispatch({
            type: GET_JOBS_LOADING,
            payload: false,
          });
        }, 500);
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
      }, 500);
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
    }
  };
};

export const getSearchQueryAction = (query) => {
  return {
    type: "GET_SEARCH_QUERY",
    payload: query,
  };
};
