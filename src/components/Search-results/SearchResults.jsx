import React, { useState } from "react";
import "./SearchResults.css";

import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function SearchResults({ data }) {
  console.log(data.docs);
  const [pageNumber, setPageNumber] = useState(0);

  const booksPerPage = 4;
  const pagesVisited = pageNumber * booksPerPage;
  const pageCount = Math.ceil(data.docs.length / booksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }; // react-paginate fn

  const displayBooks = data.docs
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((book) => {
      return (
        <div key={book.key} className="home__res__book__div">
          <Link className="home__book__info__link" to={`${book.key}`}>
            <div className="home__book__info">
              <h2>{book.title}</h2>
              <h5>{book.author_name}</h5>
              <h5>objavljena {book.first_publish_year}</h5>
            </div>
            <div className="home__res__img">
              <img
                src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            </div>
          </Link>
        </div>
      );
    });

  return (
    <div className="home__data__res__container">
      <div className="home__data__res__table">{displayBooks}</div>
      <div className="home__pagination__container">
        {data.docs.length > 4 ? (
          <ReactPaginate
            previousLabel={"Prethodna"}
            nextLabel={"Sledeća"}
            pageRangeDisplayed={5}
            marginPagesDisplayed={5}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination__btns"}
            pageClassName={"pagination__btn"}
            previousLinkClassName={"next__btn"}
            nextLinkClassName={"next__btn"}
            activeClassName={"active__btn"}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SearchResults;
