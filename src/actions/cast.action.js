import axios from "axios";

export const GET_MOVIE_CAST = "GET_MOVIE_CAST";

export const getCast = (movieid) => {
    return (dispatch) => {
        return axios
            // eslint-disable-next-line no-undef
            .get(`${process.env.REACT_APP_API_URL}movie/${movieid}/credits?api_key=3944e592a9dd58f7949d4897e684bd2f`)
            .then((res) => {
                dispatch({ type: GET_MOVIE_CAST, payload: res.data.cast });
            })
            .catch((err) => console.log(err));
    };
};