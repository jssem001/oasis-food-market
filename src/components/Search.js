import React from "react";

function Search({search, onSearchChange }) {
  

  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="ui large fluid icon input flex items-center max-w-lg mx-auto">
      <input
        className="rounded-md w-full"
        type="text"
        placeholder="Search Items..."
        value={search} 
        onChange={handleSearchChange}
      />
      <i className="circular search link icon" ></i>
    </div>
  );
}

export default Search;