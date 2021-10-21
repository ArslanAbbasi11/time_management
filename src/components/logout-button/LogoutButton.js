import React from 'react';
import style from './LogoutButton.module.css';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
const LogoutButton=()=> {
    const dispatch = useDispatch();
    const logOut=()=>{
         dispatch(allActions.loginStatus("LOGOUT"));
         localStorage.removeItem('token');
         localStorage.removeItem('firstName');
         localStorage.removeItem('lastName');
    }
    return (
         <button className={style.logout_btn}
           onClick={()=>logOut()} 
        >
        logout</button>
    )
}

export default LogoutButton
