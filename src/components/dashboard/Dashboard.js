import React from 'react'
import LogoutButton from '../logout-button/LogoutButton';
import { useSelector } from 'react-redux';
import style from './Dashboard.module.css';
import { Link } from 'react-router-dom';

const Dashboard=(props)=> {
    const role=useSelector(state => state?.session.loginUser?.user?.roles[0]?.name);
    return (
        <div className={style.dash_wrapper}>
            <Link to="/" className={style.link}>Home</Link>
            {    
                role==="user" ? <Link to="/settings" className={style.link}>&#x2699; Settings</Link>:  <></>
            }
         <LogoutButton/>
        </div>
    )
}

export default Dashboard
