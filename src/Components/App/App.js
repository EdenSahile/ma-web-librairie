import  React,{ Fragment} from 'react';
import {useEffect,useState}from 'react'
import Navbar from '../Navbar/Navbar'
import '../../App.css';
import { BooksList } from '../BooksList/BooksList';
import { Sidebar } from '../Sidebar/Sidebar';


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




const onTextChange=input=>{
    setState({...state, isSearching:input.length > 0});
    console.log(input.target.value); 
}


const handleSubmit=(e)=>{
  e.preventDefault();
 }

 useEffect(() => {
  fetchAPI();
},);

const fetchAPI = () => { 
    const url = `${constants.BaseURL}q=inauthor:festy&projection=full&filter=paid-ebooks&key=${constants.APIKey}`;
      
console.log(url)
    fetch(url)
      .then(response => {
        if (!response.ok) {
          console.log(response.statusText);
        }
        return response.json();
      })
      .then(data => {
          let items= data.items
          console.log(items)
    
    setState({
      ...state,
      books:data.items
    });
  console.log(state.books); 
     
}).then(err=>{
console.log(err)
})
  
}
 
 
return (
    <Fragment>
      <Navbar onTextChange={onTextChange} submit={handleSubmit}  />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
           <Sidebar/>
          </div>
          <div className=" col-sm-12 col-md-9">
          <BooksList books={state.books} />
           </div>
        </div>
      </div>
    </Fragment>
)
}
export default App;
