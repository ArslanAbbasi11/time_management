import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import style from './Alert.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const Alert=()=> {
    var alert= useSelector(state => state.alerts?.alert);
    const dispatch = useDispatch();
    var [msg,setMsg]=useState();
    useEffect(()=>{
        if(alert){
            message();
            resetAlert();
        }
    },[alert]);
    const message=()=>{
        setMsg(msg=alert);
    }
    const resetAlert=()=>{
      dispatch({type:"ALERT",
                 payload:""});
    }
    return (
        <div className={style.alert} >
         <span className={style.closebtn} onClick={(e)=>setMsg(msg="")}>&times;</span> 
            {msg}
        </div>
    )
}

export default Alert
