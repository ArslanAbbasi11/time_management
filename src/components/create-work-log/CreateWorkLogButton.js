import React from 'react';
import style from './CreateWorkLog.module.css';
import CreateWorkLog from './CreateWorkLog';

const CreateWorkButton=()=> {
    return (
        <div className={style.wrapper}>
        <div className={style.dropdown}>
               <button className={style.dropbtn}>+</button>
               <div className={style.dropdown_content} >
                <CreateWorkLog/>
               </div>
          </div>   
        </div>
    )
}

export default CreateWorkButton
