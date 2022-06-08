import  React,{ Fragment} from 'react';
import {useEffect,useState}from 'react'
import Navbar from '../Navbar/Navbar'
import '../../App.css';
import { BooksList } from '../BooksList/BooksList';



const constants = {
  BaseURL: "https://www.googleapis.com/books/v1/volumes?",
  APIKey: "AIzaSyAWkU9uYICzpImSOiW4tN9dQut9z91Eg3g",
}


const App=()=> {
  const [state, setState]=useState({
    isSearching:false,
    active:"search",
    books:[],
    query:""
  })
  

const onTextChange=e=>{
    setState({...state, 
      isSearching:e.length>0,
      query:e.target.value

    })
    
  }

  


const handleSubmit=(e)=>{
  e.preventDefault();
  fetchAPI();

   setState({
     ...state,
     query:" ",
   })


 }

 useEffect(() => {
  
  
},[]);

const fetchAPI = () => { 
    const url = `${constants.BaseURL}q=${state.query}&maxResults=40&projection=full&filter=paid-ebooks&key=${constants.APIKey}`;
console.log(url)
    fetch(url)
      .then(response => {
        if(!response.ok) {
          console.log(response.statusText);
          return
        }
        return response.json();
      })
      .then(data => {
      
    setState({
      ...state,
      books:data.items,

   })
   })

}
 
 
return (
  <Fragment>
    <Navbar
      onTextChange={onTextChange}
      submit={handleSubmit}
      query={state.query}
    />
    <div className="container">
        <div className="row">
        <div className=" col-sm-12">
          <BooksList books={state.books} />
        </div>
      </div>
    </div>
  </Fragment>
);
}
export default App;
