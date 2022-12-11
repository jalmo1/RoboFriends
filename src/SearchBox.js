import React from "react";
// import CardList from "./CardList";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
        <input 
        className="tc pa3 ba b--green bg-lightest-blue" 
        type="search" 
        placeholder="Search Robots" 
        onChange={searchChange}
        />
        </div>
    )
}

export default SearchBox;