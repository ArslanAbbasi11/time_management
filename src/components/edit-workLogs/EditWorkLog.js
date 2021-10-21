import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import style from '../../pages/signup/SignUp.module.css'
import editForm from '../edit-user/EditUser.module.css';
import formStyle from '../create-work-log/CreateWorkLog.module.css';
const EditWorklog=(props)=> {
    var token=localStorage.getItem('token');
    const [input,setInput]=useState({
        userId:props.log.user.id,
        id:props.log.id,
        logDate:props.log.log_date,
       hours:props.log.hours,
        description:props.log.description,
     
    });
    const dispatch = useDispatch();
    return (
        <div className={style.wrapper}>
           <div className={style.wrapper_inner}>
              <form onSubmit={e=>e.preventDefault()} className={editForm.edit_form}>
              <h3>Edit Work Logs</h3>
              
                   
<input type="date" placeholder="Log Date" required value={input.logDate}
 onChange={(e)=>setInput({...input,logDate:e.target.value})}
 className={formStyle.input_field} 
 />
  <input type="numbert" placeholder="Hours"  required value={input.hours}
 onChange={(e)=>setInput({...input,hours:e.target.value})}
 className={formStyle.input_field} 
 />

 <textarea  placeholder="Description" required  value={input.description}
 onChange={(e)=>setInput({...input,description:e.target.value})}
 />
                  <input type="submit" value="Submit" onClick={()=>dispatch(allActions.crudWorkLog(input,token,"UPDATE"))}/>
              </form>
           
           </div>
        </div>
    )
}



export default EditWorklog;