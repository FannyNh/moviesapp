import {
    GET_MOVIE_RECOMMENDATIONS
} from "../actions/movie.action";

const initialState = [{}];

export default function movieReducer(state = initialState, action){

    switch (action.type){
        case GET_MOVIE_RECOMMENDATIONS:
            return [...action.payload];


        default:
            return state;
    }

}