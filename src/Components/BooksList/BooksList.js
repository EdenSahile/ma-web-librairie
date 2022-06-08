import React, { Fragment } from "react";
import CardBook from "../CardBook/CardBook";
import "../../App.css";

export const BooksList = ({ books }) => {
  return (
    <div className="bookListContainer">

      {books.map((book,key) => {



        return (
          <CardBook
            alltitre={book.volumeInfo.title}
             titre={book.volumeInfo.title.substr(0,25)}
            alt={book.volumeInfo.title}
            key={book.id}
            datePublication={book.volumeInfo.publishedDate}
            description={book.volumeInfo.description}
            descriptioncut={book.volumeInfo.description.substr(0,70)}
            categories={book.volumeInfo.categories}
            editeur={book.volumeInfo.publisher}
           prix={book.saleInfo.listPrice.amount}
            ean={book.volumeInfo.industryIdentifiers[0].identifier}
            nbpages={book.volumeInfo.pageCount}
            image={book.volumeInfo.imageLinks.thumbnail}
            auteurs={book.volumeInfo.authors}
          />
        );
      })}
    </div>
  );
};
