import React from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearch }) => {
  return (
    <div className='search'>
        <input
      type="text"
      placeholder="Search"
      onChange={(e) => handleSearch(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;
