import React, { useEffect, useState } from 'react';
import Ui from './ui';
import {handleSubmit} from './header'





//declaration of the variable for the Api
export const apiLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5942674b67cef06aa325357dadb0a47f';

export const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



function BlockApp(){

    const [movies, setMovies] = useState([]);


    useEffect(()=>{

fetch(apiLink).then((result)=>
     result.json()
 ).then((data)=>{
     setMovies(data.results);
    })


    

})



    return(
        <div className="block-app">
            {
           
            movies.length > 0 && movies.map((data) =>{
                    return  <Ui backdrop_path={data.backdrop_path} title={data.title} vote_average={data.vote_average} overview={data.overview}/>
                 
                  })
                 
                
            }
          
        </div>
    )
}



export default  BlockApp