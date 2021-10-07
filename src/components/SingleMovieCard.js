import React from 'react';
import {Link} from "react-router-dom";

const SingleMovieCard = ({obj, id}) => {
    const urlImg = `https://www.themoviedb.org/t/p/w500/${obj.backdrop_path}`;
    return (
        <Link to={{pathname: '/movie', state: obj}}>
            <li key={id} className="card" >
                {obj.backdrop_path ? <img src={urlImg} alt='ccccc ddd'/> : null}
                <h3>{obj.title}</h3>
                <p>{obj.overview}</p>
            </li>
        </Link>
    );
};

export default SingleMovieCard;