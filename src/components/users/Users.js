import React from 'react'
import { useSelector } from "react-redux";
import style from './Users.module.css';
import DisplayUsers from './DisplayUsers';
import Pagination from '../pagination/Pagination';
const Users=()=> {
 
    var users=useSelector(state => state.users.all.users?.data);
 
   
return (

    
       <div className={style.wrapper}>
           <DisplayUsers arr={users}/>
           <Pagination  />
       </div>
    
)
}
export default Users
