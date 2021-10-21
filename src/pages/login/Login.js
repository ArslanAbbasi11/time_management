import React from 'react'
import style from './Login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Login=()=> {
    const [input,setInput]=useState({});
    const dispatch = useDispatch();
    const  logStatus = useSelector(state => state.session.loginUser?.isLogin);
   
    
    return (
        <>
        {  logStatus ? 
         <Redirect to={{ pathname: '/' }} />
            :
        <div className={style.wrapper}>
           <div className={style.wrapper_inner}>
              <form onSubmit={e=>e.preventDefault()} className={style.main_loginForm}>
                  <h3>Login</h3>
                  <input type="email" placeholder="Email" required
                  onChange={(e)=>setInput({...input,email:e.target.value})}
                  />
                  <input type="password" placeholder="Password" required
                   onChange={(e)=>setInput({...input,password:e.target.value})}
                  />
                  <input type="submit" value="Login" onClick={()=>dispatch(allActions.login(input))}/>
              </form>
               <div className={style.content}>
                   <img src="images/logo_small_icon_only.png" alt="icon"/>
                   <h4>Welcome</h4>
                   <p>The shorter way to do many things is to only do one thing at a time.</p>
               </div>
           </div>
        </div>
        }
        </>
    )
}

export default Login;