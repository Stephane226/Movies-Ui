import React from 'react';
import useState from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";
function Ui(props){
  


    return(
        <div className="ui">
            <div className="img"> 
                <img src={IMG_API + props.backdrop_path}/>
                <div className="infoFilm">
                    <span>Masaaki Benon</span>
                    <span>29</span>
                </div>
            </div>
        </div>
    )
}


export default Ui