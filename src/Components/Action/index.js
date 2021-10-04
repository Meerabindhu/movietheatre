import dummyResponse from './dummyResponse.json'
const GET_MOVIES_LIST = "GET_MOVIES_LIST";

const getMoviesByGenre = (value) => async (dispatch) => {
  try{
  const queryParams=value ? `?q=${value? value : null}` : ''
  const getData = await fetch(`https://wookie.codesubmit.io/movies${queryParams}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer Wookie2019",
    },
  });
  const data = await getData.json();
  if (data) {
    dispatch({ type: GET_MOVIES_LIST, payload: data });
  }
}catch{
  dispatch({ type: GET_MOVIES_LIST, payload: dummyResponse });
}

};

export default getMoviesByGenre;
