import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import { useEffect } from 'react';

import style from '../users/Users.module.css';
import { useSelector } from 'react-redux';
import EditWorkLogButton from '../edit-workLogs/EditWorkLogButton';
import flag from  './WorkLog.module.css';
const DisplayWorkLogs=(props)=>{  
    const logs=props.arr;
    var alert= useSelector(state => state.alerts?.alert);
    const id = useSelector(state => state.session.loginUser?.user.id);
    var filter=useSelector(state => state.workLogs?.filter);

const dispatch = useDispatch();

var token=localStorage.getItem('token');

const dispatcher=()=>{
    dispatch(allActions.fetchWorkLogs(token,id,props.sDate,props.eDate));
}
useEffect(()=>{
    dispatcher();
},[alert,props.eDate,filter,props.sDate]);

    return(<table>
        <thead>
           <tr className={style.head_row}>
           <th>ID</th>
              <th>USER ID</th>
               <th>LOG DATE</th>
               <th>HOURS</th>
               <th className={style.desc_head}>DESCRIPTION</th>
               <th >ACTIONS</th>
           </tr>
        </thead>
       <tbody>
       { logs?.map((value) =>(
                                      <tr key={value.id}
                                      
                                       className={ value.is_under_hours ? flag.red :flag.green }
                                      
                                      > 
                                      <td> {value.id}</td>
                                      <td> {value.user.id}</td>
                                        <td> {value.log_date}</td>
                                        <td> {value.hours}</td>
                                        <td className={style.description}> {value.description}</td>
                                        <td><EditWorkLogButton log={value}/></td>
                                        
                                       
                                    </tr> 
                                   
                                       ))}
       </tbody>
    </table>)
}
export default DisplayWorkLogs;