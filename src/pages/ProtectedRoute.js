import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions';
const ProtectedRoute=(props)=> {
    const  isAuthenticated = useSelector(state => state.session.loginUser?.isLogin);
    console.log(isAuthenticated);
    const Component = props.component;
    const dispatch = useDispatch();
    useEffect(()=>{
      if(localStorage.getItem('token') && !isAuthenticated)
     dispatch(allActions.loginStatus("LOGIN_STATUS_TRUE"));
    },[]);
    return (
      <>
      {isAuthenticated ? 
         <> <Header/>
      <div className="container">  <Component /></div>
          </>:
          <Redirect to={{ pathname: '/login' }} />
      }
      </>
    )
}

export default ProtectedRoute
