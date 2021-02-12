import React, { useEffect, useState } from 'react';
//import {handleSubmit} from './header'

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
                    <span style={{marginLeft:'30px'}}>{props.vote_average}</span>
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