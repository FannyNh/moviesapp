import axios from "axios";

export const GET_MOVIES = "GET_MOVIES";
export const getMovies = (value) => {
    return (dispatch) => {
      return axios
          // eslint-disable-next-line no-undef
        .get(`${process.env.REACT_APP_API_URL}search/movie/?api_key=3944e592a9dd58f7949d4897e684bd2f&query=${value}`)
        .then((res) => {
          dispatch({ type: GET_MOVIES, payload: res.data.results });
        })
        .catch((err) => console.log(err));
    };
  };