import React from 'react'
import { useSelector } from "react-redux";
import style from '../users/Users.module.css';
import { useState } from 'react';
import DisplayWorkLogs from './DisplayWorkLogs';
import filterStyle from  './WorkLog.module.css';
const WorkLogs=()=> {
 
    var filterLogs=useSelector(state => state.workLogs?.workLogs.workLogs);
    var logs=useSelector(state => state.workLogs?.workLogs.data);
    var flag=useSelector(state => state.workLogs?.filter);
    var [startDate,setStartDate]=useState('');
    var [endDate,setEndDate]=useState('');
   
return (

    
       <div className={style.wrapper}>
           <div className={filterStyle.filter}>
               <span>&#128269;</span>
             <label for="start" className={filterStyle.labl}>From</label> 
              <input type="date"   id="start" className={filterStyle.filter_input}
               onChange={e=>setStartDate(startDate=e.target.value)}
               />
                <label for="end"  className={filterStyle.labl}>To</label> 
               <input type="date"  id="end" className={filterStyle.filter_input}
                 onChange={e=>setEndDate(endDate=e.target.value)}
               />
           </div>
          {flag ?
            <DisplayWorkLogs arr={filterLogs} sDate={startDate} eDate={endDate}/>:
            <DisplayWorkLogs arr={logs}  sDate={startDate} eDate={endDate}/>
          } 
       </div>
    
)
}
export default WorkLogs
