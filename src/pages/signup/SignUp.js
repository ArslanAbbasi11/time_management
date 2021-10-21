import React from 'react'
import style from './SignUp.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import { Link } from 'react-router-dom';


const SignUp=()=> {
    const [input,setInput]=useState({});
    const dispatch = useDispatch();
    return (
        <div className={style.wrapper}>
           <div className={style.wrapper_inner}>
              <form onSubmit={e=>e.preventDefault()}>
                  <h3>Register Here</h3>
                 <div className={style.name_wrapper}>
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
                  <input type="submit" value="Submit" onClick={()=>dispatch(allActions.register(input))}/>
              </form>
               <div className={style.content}>
                   <img src="images/logo_small_icon_only.png" alt="icon"/>
                   <h4>Welcome</h4>
                   <p>Better three hours too soon than a minute too late.</p>
                   <p><br/><br/>Register Now  !</p>
                  <h5>Already have an account ?  <Link to="/login">login</Link></h5>
               </div>
           </div>
        </div>
    )
}

export default SignUp;