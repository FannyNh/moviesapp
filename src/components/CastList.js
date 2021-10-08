import React, {useEffect} from 'react';
import {getCast} from '../actions/cast.action';
import {useDispatch, useSelector} from "react-redux";

const CastList = ({movieId}) => {
    const dispatch = useDispatch();
    const movieCast = useSelector((state) => state.castReducer);
    useEffect(() => {
        dispatch(getCast(movieId));
    }, [dispatch, movieId]);

    return (
        <div className="card-wrapper">
            {movieCast && movieCast.map((cast,index) => {
                    return (
                        <div key={index} className="card">
                            {cast.profile_path ? <img src={`https://www.themoviedb.org/t/p/w500/${cast.profile_path}`} alt={`the actor ${cast.name}}`}/> :  <img src="./assets/no-profil.png" alt=''/>}
                            <div className="name">{cast.name}</div>
                        </div>
                    )
                }
            )}
        </div>
    );
};

export default CastList;
