import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import style from '../../pages/signup/SignUp.module.css'
import editForm from './EditUser.module.css';
const EditUser=(props)=> {
    var token=localStorage.getItem('token');
    const [input,setInput]=useState({
        id:props.user.id,
        firstName:props.user.firstName,
        lastName:props.user.lastName,
        email:props.user.email
    });
    const dispatch = useDispatch();
  
    return (
        <div className={style.wrapper}>
           <div className={style.wrapper_inner}>
              <form onSubmit={e=>e.preventDefault()} className={editForm.edit_form}>
                  <h3>Edit User</h3>
                 <div className={style.name_wrapper}>
                 <input type="text" placeholder="First Name" className={style.name} required value={input.firstName}
                  onChange={(e)=>setInput({...input,firstName:e.target.value})}
                  />
                   <input type="text" placeholder="Last Name" className={style.name} required value={input.lastName}
                  onChange={(e)=>setInput({...input,lastName:e.target.value})}
                  />
                 </div>
                  <input type="email" placeholder="Email" required value={input.email}
                  onChange={(e)=>setInput({...input,email:e.target.value})}
                  />
                  <input type="password" placeholder="Password" required 
                   onChange={(e)=>setInput({...input,password:e.target.value})}
                  />
                  <input type="password" placeholder="Confirm Password" required 
                   onChange={(e)=>setInput({...input,cfmPassword:e.target.value})}
                  />
                  <input type="submit" value="Submit" onClick={()=>dispatch(allActions.crudUsers(input,token,"UPDATE"))}/>
              </form>
           
           </div>
        </div>
    )
}

export default EditUser;