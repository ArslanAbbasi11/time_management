import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import style from '../../pages/signup/SignUp.module.css'
import { useSelector } from 'react-redux';

const CreateUser=()=> {
    var token=localStorage.getItem('token');
    const [input,setInput]=useState({type:'user'});
    const dispatch = useDispatch();
    const role=useSelector(state => state?.session.loginUser?.user?.roles[0]?.name);
    return (
        <div className={style.wrapper}>
           <div className={style.wrapper_inner}>
              <form onSubmit={e=>e.preventDefault()}>
                  <h3>Create New Users</h3>
                 <div className={style.name_wrapper}>
                     {role==='admin' ?
                      <select  onChange={(e)=>setInput({...input,type:e.target.value})}>
                     <option value="">Select User</option>
                          <option value="user">user</option>
                            <option value="manager">manager</option>
                         </select> : 
                         <></>
                         }
                 <input type="text" placeholder="First Name" className={style.name} required
                  onChange={(e)=>setInput({...input,firstName:e.target.value})}
                  />
                   <input type="text" placeholder="Last Name" className={style.name} required
                  onChange={(e)=>setInput({...input,lastName:e.target.value})}
                  />
                 </div>
                  <input type="email" placeholder="Email" required
                  onChange={(e)=>setInput({...input,email:e.target.value})}
                  />
                  <input type="password" placeholder="Password" required
                   onChange={(e)=>setInput({...input,password:e.target.value})}
                  />
                  <input type="password" placeholder="Confirm Password" required
                   onChange={(e)=>setInput({...input,cfmPassword:e.target.value})}
                  />
                  <input type="submit" value="Submit" onClick={()=>dispatch(allActions.createUsers(token,input))}/>
              </form>
               <div className={style.content}>
                   <img src="images/logo_small_icon_only.png" alt="icon"/>
                   <h4>Welcome</h4>
                   <p>A true leader makes an effort to help develop their team's skills so they can reach their full potential</p>
                   <p><br/><br/>Create Now  !</p>
               </div>
           </div>
        </div>
    )
}

export default CreateUser;