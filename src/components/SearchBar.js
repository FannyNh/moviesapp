import React, { useState } from 'react';
import { getMovies } from '../actions/movies.action';
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [searchTxt, setSearchTxt] = useState("");
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getMovies(searchTxt));
     };

    return (
        <div className="search-form">
            <form action="" id="search-in-form" onSubmit={handleSearch}>
                <input
                    id="searchTxt"
                    type="text"
                    placeholder="Search by title, character or genre"
                    value={searchTxt}
                    onChange={(e) => setSearchTxt(e.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchBar;