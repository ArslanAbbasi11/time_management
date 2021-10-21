import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header=()=> {
var firstName=localStorage.getItem('firstName');
var lastName=localStorage.getItem('lastName');
  
    return (
        <header>
           <div className="container">
         
                <div className={style.header_inner}>
                    <figure>
                       <Link to="#"> <img src="images/logo.svg" alt="app logo"/></Link>
                    </figure>
                    <div className={style.profile}>
                        <img src="images/profile.png" alt="profile pic"/>
                       <h5>{firstName}  {lastName}</h5>
                    </div>     
                </div>
           </div>
        </header>
    )
}

export default Header
