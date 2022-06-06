import React from 'react'
import CardBook from '../CardBook/CardBook';
import "../../App.css";


export const BooksList=({books})=>{



        <div className='List'>
            {books.map(book=>{
                console.log(book.volumeInfo.imageLinks.thumbnail);
             
              return (
                <CardBook
                  titre={book.volumeInfo.title}
                  auteur={book.volumeInfo.authors}
                  datePublication={book.volumeInfo.publishedDate}
                  description={book.volumeInfo.description}
                  categories={book.volumeInfo.categories}
                  editeur={book.volumeInfo.publisher}
                  prix={book.saleInfo.listPrice.amount}
                  ean={book.volumeInfo.industryIdentifiers[0].identifier}
                  monnaie={book.saleInfo.listPrice.currencyCode}
                  nbpages={book.volumeInfo.pageCount}
                  image={book.volumeInfo.imageLinks.thumbnail}
                />
              );

           
            })}

            </div>
   
         
        
    
};
 