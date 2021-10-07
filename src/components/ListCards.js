import React from 'react';
import SingleMovieCard from "../components/SingleMovieCard"


const ListCards = ({moviesData}) => {

    return (
        <ul className="card-wrapper">
            {moviesData.length > 0 && moviesData !== [{}]   && moviesData.map((obj,index) =>(
                <SingleMovieCard key={index}  obj={obj}/>
            ) )
            }
        </ul>
    );
};

export default ListCards;