const initialState = [{}];

export default function moviesReducer(state = initialState, action){

    switch (action.type){
        case "GET_MOVIES":

            return [...action.payload]

        default:
            return state;
    }

}