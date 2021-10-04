const GET_MOVIES_LIST = "GET_MOVIES_LIST";
const initialState = {
  moviesCollection: [],
};

export const movieReducer = (state = initialState, action) => {
  const { payload,type } = action || {};
  switch (type) {
    case GET_MOVIES_LIST:
        const {movies} =payload || []
      return {
        ...state,
        moviesCollection: movies,
      };
    default:
      return state;
  }
};
