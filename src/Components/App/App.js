import  React,{ Fragment} from 'react';
import {useEffect,useState}from 'react'
import Navbar from '../Navbar/Navbar'
import '../../App.css';
import { BooksList } from '../BooksList/BooksList';
const constants = {
  BaseURL: "https://www.googleapis.com/books/v1/volumes?",
  APIKey: "AIzaSyAWkU9uYICzpImSOiW4tN9dQut9z91Eg3g",
};
const App=()=> {
const [books, setBooks]=useState([]);
const [input, setInput]=useState('');
 useEffect(() => {
   fetchAPI();
 },[]);
const fetchAPI = () => {
    const url = `${constants.BaseURL}q=harlan%20coben&projection=full&filter=paid-ebooks&key=${constants.APIKey}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          console.log(response.statusText);
        }
        return response.json();
      })
      .then(data => {
          let items= data.items
    
    setBooks(items);
  console.log(items);
     
})
  
}
 
 
return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            categorie
          </div>
          <div className="col-sm-9">
          <BooksList books={books}/>
           </div>
        </div>
      </div>
    </Fragment>
)
}
export default App;
