import React, { useState, useEffect } from "react";
import "./Book.css";
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
      //`https://openlibrary.org/books/${id}.json`
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
      {book && <h1 className="book__page__title">{book.title}</h1>}

      {/* {book.description && (
        <div className="book__page__desr__container">
          <h4>Description</h4>
          <p className="book__page__descr">{book.description}</p>
        </div>
      )} */}
      {book.first_publish_date && (
        <div className="book__page__desr__container">
          <h4>Published</h4>
          <p className="book__page__descr">{book.first_publish_date}</p>
        </div>
      )}

      {book.subject_people && (
        <div className="book__page__desr__container">
          <h4>Main Characters</h4>
          <p className="book__page__descr">
            {book.subject_people.map((el) => el + ", ")}
          </p>
        </div>
      )}
      {book.subjects && (
        <div className="book__page__desr__container">
          <h4>Book Subject</h4>
          <p className="book__page__descr">
            {book.subjects.map((el) => el + ", ")}
          </p>
        </div>
      )}

      <button className="book__page__home__btn" onClick={handleClick}>
        Search New Book
      </button>
    </div>
  );
}

export default BookPage;
