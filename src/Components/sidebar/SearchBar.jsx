import React from 'react';

export default function SearchBar({ onSearch, setSearchTerm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(); // Call the onSearch function passed from Sidebar
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update the searchTerm state in Sidebar
  };

  return (
    <div>
      <div className="container-fluid">
        <form className="d-flex row" onSubmit={handleSubmit} role="search">
          <input
            className="form-control px-4 mt-1 col bg-black text-white"
            type="search"
            placeholder="Search Notes..."
            aria-label="Search"
            onChange={handleChange} // Call handleChange to update searchTerm
          />
          <button
            className="btn btn-outline-success w-25 mx-1 mt-1 bg-black"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

