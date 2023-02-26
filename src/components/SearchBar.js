import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar({ data, setData, page }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length < 1) {
      axios
        .get("https://swapi.dev/api/people/?page=" + page)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => console.log(error));
    } else {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setData(filteredData);
    }
  };

  return (
    <div>
      <p>Search: </p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

export default SearchBar;
