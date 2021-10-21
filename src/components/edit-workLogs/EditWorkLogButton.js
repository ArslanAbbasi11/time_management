import React from 'react'
import style from '../edit-user/EditUser.module.css';
import EditWorklog from './EditWorkLog';
const EditWorkLogButton=(props)=> {
    return (
    
        <div className={style.dropdown}>
               <button className={style.dropbtn}>Edit</button>
               <div className={style.dropdown_content} >
                 <EditWorklog log={props.log} />
               </div>
          </div>   
     
    )
}

export default EditWorkLogButton;
