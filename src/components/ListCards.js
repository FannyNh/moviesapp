import React from 'react';
import SingleMovieCard from "../components/SingleMovieCard"
import {useSelector} from "react-redux";

const ListCards = () => {
    const moviesData = useSelector((state) => state.moviesReducer);

    return (
        <>
            {moviesData.length > 0 && moviesData !== [{}]   && moviesData.map((obj,id) =>(
                <SingleMovieCard key={id}  obj={obj}/>
            ) )
            }
        </>
    );
};

export default ListCards;