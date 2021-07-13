import React, { useState, useEffect } from "react";
import "./HomePage.css";

import SearchResults from "../../components/Search-results/SearchResults";

function HomePage() {
  const api = `http://openlibrary.org/search.json?title=`;
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(null);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    setSearch(input);
    e.preventDefault();
    setInput("");
  };

  const fetchBook = async () => {
    try {
      const response = await fetch(api + `${search}`);
      const db = await response.json();
      setData(await db);
    } catch (err) {
      console.log(`ERROR `, err);
    }
  };
  useEffect(() => {
    fetchBook();
  }, [search]);

  return (
    <div className="home__container">
      <img src="/images/book.jpg" alt="" className="home__img" />
      <h1 className="home__title">Open Library</h1>

      <form className="home__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="home__input"
          value={input}
          placeholder="Search a book"
          onChange={handleChange}
        />
        <button className="home__btn" type="submit">
          Find your book
        </button>
      </form>
      {search && <SearchResults data={data} />}
    </div>
  );
}

export default HomePage;
