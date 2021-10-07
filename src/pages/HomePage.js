import React from 'react';
import SearchBar from "../components/SearchBar"
import ListCards from "../components/ListCards"

const HomePage = () => {

    return (
        <div className="home">
            <div className="logo"></div>
            <div className="home-header">
                <h1>this is the homepage bitch</h1>
                <SearchBar />
                <ListCards />
            </div>
            <div className="logoDB"></div>
        </div>
    );
};

export default HomePage;