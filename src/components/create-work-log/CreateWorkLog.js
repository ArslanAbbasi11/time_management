import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import style from '../../pages/signup/SignUp.module.css'
import formStyle from './CreateWorkLog.module.css';

const CreateWorkLog=()=> {
    var token=localStorage.getItem('token');
    const [input,setInput]=useState({});
    const dispatch = useDispatch();
  
    return (
        <div className={style.wrapper}>
           <div className={style.wrapper_inner}>
              <form onSubmit={e=>e.preventDefault()}  className={formStyle.log_form}>
                  <h3>Create Your Work Log</h3>
              
                   
                 <input type="date" placeholder="Log Date" required
                  onChange={(e)=>setInput({...input,logDate:e.target.value})}
                  className={formStyle.input_field} 
                  />
                   <input type="numbert" placeholder="Hours"  required
                  onChange={(e)=>setInput({...input,hours:e.target.value})}
                  className={formStyle.input_field} 
                  />
                
                  <textarea  placeholder="Description" required
                  onChange={(e)=>setInput({...input,description:e.target.value})}
                  />
                  
                  <input type="submit" value="Submit" onClick={()=>dispatch(allActions.createWorkLog(token,input))} className={style.submit}/>
              </form>
               <div className={style.content}>
                   <img src="images/logo_small_icon_only.png" alt="icon"/>
                   <h4>Welcome</h4>
                   <p>You are not your resume, you are your work.</p>
                   <p><br/><br/>Create Now  !</p>
               </div>
           </div>
        </div>
    )
}

export default CreateWorkLog;