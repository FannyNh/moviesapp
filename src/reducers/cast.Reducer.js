import {
    GET_MOVIE_CAST
} from "../actions/cast.action";

const initialState = [{}];

export default function castReducer(state = initialState, action){

    switch (action.type){
        case GET_MOVIE_CAST:
            return [...action.payload];

        default:
            return state;
    }

}