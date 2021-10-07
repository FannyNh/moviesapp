import React from 'react';
import { useLocation} from "react-router-dom";

const SingleMoviePage = () => {
    let location = useLocation();
    // const {isLoad} = location.state;
    const urBgImg = `https://www.themoviedb.org/t/p/original${location.state.backdrop_path}`;
    const urlPosterImg = `https://www.themoviedb.org/t/p/w500${location.state.poster_path}`;
    console.log(urBgImg);
    return (
        <div className="movie-header">
            <div className="movie-header-hero">
                <img src={urBgImg} alt={`hero img of the ${location.state.title}`} />
                <div className="movie-header-hero-gradient"></div>
            </div>
            <div className="movie-header-content">
                <div className="movie-header-poster">
                    <img src={urlPosterImg} alt={`poster of the ${location.state.title}`}/>
                </div>
                <div className="movie-header-title">
                    <h1>{location.state.title}</h1>
                </div>
                <div className="movie-header-date-vote">
                    <p>release date : {location.state.release_date}</p>
                    <p>vote : {location.state.release_date}</p>
                </div>
                <div className="movie-header-overview">
                    <p>{location.state.overview}</p>
                </div>
            </div>
            <div className="movie-main">

            </div>

        </div>


    );
};

export default SingleMoviePage;