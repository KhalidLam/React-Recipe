import React, { useState } from "react";

export default function Search({ getSearchResults }) {
  const [query, setQuery] = useState("");

  //   const getInput = () => {
  //     return document.querySelector(".search__field").value;
  //   };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    if(query){
        getSearchResults(query)
    }
  };


  return (
    <form class='search' onSubmit={handleSubmit}>
      <input
        type='text'
        class='search__field'
        placeholder='Search over 1,000,000 recipes...'
        value={query}
        onChange={handleChange}
      />
      <button className='btn search__btn'>
        <svg className='search__icon'>
          <use href='img/icons.svg#icon-magnifying-glass'></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
}
