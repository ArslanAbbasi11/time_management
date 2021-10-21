import React from 'react'
import style from './EditUser.module.css';
import EditUser from './EditUser';
const EditButton=(props)=> {
    return (
    
        <div className={style.dropdown}>
               <button className={style.dropbtn}>Edit</button>
               <div className={style.dropdown_content} >
                 <EditUser typ="user" user={props.user} />
               </div>
          </div>   
     
    )
}

export default EditButton
