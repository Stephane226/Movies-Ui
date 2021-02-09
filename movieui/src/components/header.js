import React from 'react';

function Header() {
    return (
      <div className="header">
       <div className="logo">
          <h2>|MovILaNd</h2> 
       </div>

       <div className="inputBar">
           <input className="search" placeholder="Search..."/>
       </div>
      </div>
    );
  }
  
  export default Header;