import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {getMovieRecommendation} from '../actions/movie.action';
import {useDispatch, useSelector} from "react-redux";
import ListCards from "../components/ListCards";
import CastList from "../components/CastList";

const SingleMoviePage = () => {
    let location = useLocation();
    const dispatch = useDispatch();
    const urBgImg = `https://www.themoviedb.org/t/p/original${location.state.backdrop_path}`;
    const urlPosterImg = `https://www.themoviedb.org/t/p/w500${location.state.poster_path}`;
    const movieData = useSelector((state) => state.movieReducer);
    useEffect(() => {
        dispatch(getMovieRecommendation(location.state.id));
    }, [dispatch, location.state.id]);

    return (
        <>
            <div className="movie-header">
                <div className="movie-header-hero">
                    <img src={urBgImg} alt={`hero img of the ${location.state.title}`}/>
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
            </div>
            <div className="movie-main">

                    {movieData.length > 1 && <><div className="movie-main-recommendations"><h3>SUGGESTED</h3>
                        <ListCards moviesData={movieData}/> </div></>}

                <div className="movie-main-cast">
                    <h3>CASTINGS</h3>
                    <CastList movieId={location.state.id}/>
                </div>
            </div>
        </>


    );
};

export default SingleMoviePage;