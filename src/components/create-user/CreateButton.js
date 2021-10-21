import React from 'react'
import style from './CreateUser.module.css';
import CreateUser from './CreateUser';
const CreateButton=()=> {
    return (
        <div className={style.wrapper}>
        <div className={style.dropdown}>
               <button className={style.dropbtn}>+</button>
               <div className={style.dropdown_content} >
                 <CreateUser />
               </div>
          </div>   
        </div>
    )
}

export default CreateButton
