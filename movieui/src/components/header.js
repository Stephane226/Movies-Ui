import React, { useEffect, useState } from 'react';
import Ui from './ui';


export const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
//export let handleSubmit;
export let handleValue;
export let inputValue;
  




function Header() {

  const [inputValue, updatedInputValue] = useState('')
  const [valueApi, updateValueApi] = useState([])

 
   handleValue = (e)=>{
    updatedInputValue(e.target.value) 
}



 const handleSubmit = (e)=>{
  e.preventDefault();

 // alert(inputValue)
  //const searchKey = SEARCH_API + inputValue;
//  alert(searchKey);

  fetch( SEARCH_API + inputValue).then((res)=> res.json()).then((datas)=>{
   return updateValueApi(datas.results)
    console.log(valueApi)
})

valueApi.length > 0 && valueApi.map((data) =>{
  return  <Ui backdrop_path={data.backdrop_path} title={data.title} vote_average={data.vote_average} overview={data.overview}/>

})




}



    return (

      
      <div className="header">
       <div className="logo">
          <h2>|MovILaNd</h2> 
       </div>

       <div className="inputBar" >
         <form onSubmit={handleSubmit}>
           <input className="search" id="searchId" placeholder="Search..." onChange={handleValue}/>
          
           </form>
       </div>
      </div>
    );
  }
  
  export default Header;