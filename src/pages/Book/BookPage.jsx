import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function BookPage() {
  const [book, setBook] = useState({});
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchBook();
  }, [id]);

  const handleClick = () => {
    history.push("/");
  };
  const fetchBook = async () => {
    const fetching = await fetch(
      //   `https://openlibrary.org/books/OL7353617M.json`
      `https://openlibrary.org/works/${id}.json`
    );
    const bookData = await fetching.json();
    const book = await bookData;
    console.log(book);
    setBook(book);
  };

  return (
    <div className="book__page__container">
      <button className="book__page__home__btn" onClick={handleClick}>
        Go Home
      </button>
      <h1>Book Details {id}</h1>
      {book && <h2>{book.title}</h2>}
      {book.first_publish_date && (
        <h3>Knjiga izasla {book.first_publish_date}</h3>
      )}
      {book.subjects && <h3>{book.subjects}</h3>}

      {/* {book ? (
        <>
          <h2>{book.title}</h2>
          <h3>Knjiga izasla {book.first_publish_date}</h3>
          <h3>{book.description}</h3>
        </>
      ) : null} */}
    </div>
  );
}

export default BookPage;
