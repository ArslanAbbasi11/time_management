import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import { useEffect } from 'react';
import EditButton from '../edit-user/EditButton';
import style from './Users.module.css';
import { useSelector } from 'react-redux';
const DisplayUsers=(props)=>{  
    const users=props.arr;
    var alert= useSelector(state => state.alerts?.alert);
   
const dispatch = useDispatch();
var token=localStorage.getItem('token');
const dispatcher=()=>{
    dispatch(allActions.fetchData(token,1));
}
useEffect(()=>{
    dispatcher();
},[alert]);
    return(<table>
        <thead>
           <tr className={style.head_row}>
               <th>ID</th>
               <th>FIRST NAME</th>
               <th>LAST NAME</th>
               <th>EMAIL</th>
              
               <th>USER TYPE</th>
               <th colSpan='2'>ACTIONS</th>
           </tr>
        </thead>
       <tbody>
       { users?.map((value) =>(
                                      <tr key={value.id}> 
                                        <td> {value.id}</td>
                                        <td> {value.firstName}</td>
                                        <td> {value.lastName}</td>
                                        <td> {value.email}</td>
                                        <td> {value.roles[0]?.name}</td>
                                        <td><EditButton user={value}/></td>
                                        <td><button className={style.del_btn} onClick={()=>dispatch(allActions.crudUsers(value.id,token,"DEL"))} >
                                          Delete</button></td>
                                    </tr> 
                                   
                                       ))}
       </tbody>
    </table>
    
    )
}
export default DisplayUsers;