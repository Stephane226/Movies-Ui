import React from 'react';
import useState from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";
function Ui(props){
  
    //overview

    return(
        <div className="ui">
            <div className="img"> 

                <img src={IMG_API + props.backdrop_path}/>

                </div>
                <div className="infoFilm">
                    <span>{props.title}</span>
                    <span style={{right:0}}>{props.vote_average}</span>
                </div>
            <div className="overview">

                <p>
                {props.overview}
                </p>
            </div>
        </div>
    )
}


export default Ui