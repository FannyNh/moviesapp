import React from 'react';
import SearchBar from "../components/SearchBar"
import ListCards from "../components/ListCards"
import {useSelector} from "react-redux";

const HomePage = () => {
    const moviesData = useSelector((state) => state.moviesReducer);

    return (
        <div className="home">

            <div className="home-content">
                <SearchBar />
                {moviesData.length > 1 && <ListCards moviesData={moviesData}/>}
            </div>

        </div>
    );
};

export default HomePage;