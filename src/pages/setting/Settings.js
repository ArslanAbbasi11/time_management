import React from 'react'
import style from './Settings.module.css';
import { useState } from 'react';
import allActions from '../../redux/actions/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Alert from '../../components/alert/Alert';
import { Link } from 'react-router-dom';
const Settings=()=> {
    const id = useSelector(state => state.session.loginUser?.user.id);
    var token=localStorage.getItem('token');

    var [hours,setHours]=useState();

    const dispatch = useDispatch();
    return (
        <>
        <Alert/>
        <Link to="/" className={style.link}> Home</Link>
        <h2 className={style.heading}>&#x2699; settings : <span>for preffered working hours per day</span></h2>
        <div className={style.wrapper}>
            
            <input type="number" placeholder="Preffered Working Hours" className={style.hours_input}
            onChange={e=>setHours(hours=e.target.value)}/>  
            <button onClick={()=>dispatch(allActions.hoursPatch(hours,token,id))} className={style.setting_btn}
            >Update</button>
        </div>
        </>
    )
}

export default Settings
