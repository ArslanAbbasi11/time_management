import React from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import { useSelector } from 'react-redux';
import style from './Home.module.css';

import AdminIndex from './admin/Index';
import ManagerIndex from './manager/Index';
import UserIndex from './user/Index'
import { Redirect } from 'react-router';
const Home=()=> {
    const role=useSelector(state => state?.session.loginUser?.user?.roles[0]?.name);
   
    return (
    
      
       
        <div className={style.wrapper}>
           <div className={style.dash_wrapper}> <Dashboard/></div>
        <div className={style.comp_wrapper}>
            {
            role==="admin" ? <AdminIndex/>:
            role==="manager" ? <ManagerIndex/>:
            role==="user" ? <UserIndex/>:
            <Redirect to={{ pathname: '/' }} />
           }
          
       </div>
        </div>
  
    )
}

export default Home
