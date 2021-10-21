import React from 'react'
import { useSelector } from 'react-redux';
import style from './Pagination.module.css';
import allActions from '../../redux/actions';
import { useDispatch } from 'react-redux';
function Pagination() {
    var links=useSelector(state => state.users.all.users?.links);
    var currentPage=useSelector(state => state.users.all.users?.current_page);
    var lastPage=useSelector(state => state.users.all.users?.last_page);
    var token=localStorage.getItem('token');
  const dispatch = useDispatch();

  //Custom pagination by arslan ahmed abbasi
    return (
      <>  { links ? 
        <div className={style.wrapper}>
         {lastPage>3 ?  <button className={style.move_btn}
             onClick={()=>dispatch(allActions.fetchData(token,currentPage-1))}
            >&laquo; Previous</button> : <></>}

          {lastPage>3 ?  <button className={style.move_btn}
             onClick={()=>dispatch(allActions.fetchData(token,1))}
            >&laquo; 1st page</button> : <></>}
            <button  className={style.current} >{currentPage}</button>

           {lastPage>1 ?<button className={style.pg_btn} 
           onClick={()=>dispatch(allActions.fetchData(token,currentPage+1))}
           >{currentPage+1}</button> : <></>}

           {lastPage>2 ?<button className={style.pg_btn} 
                   onClick={()=>dispatch(allActions.fetchData(token,currentPage+2))}
           >{currentPage+2}</button> : <></>}

         {lastPage>3 ? <span className={style.dots}> ...</span> : <></>}

           {lastPage>3 ? <button className={style.pg_btn}
          onClick={()=>dispatch(allActions.fetchData(token,lastPage))}
           >
               {lastPage}</button> : <></>}

           {lastPage>3 ?     <button className={style.move_btn}
            onClick={()=>dispatch(allActions.fetchData(token,currentPage+1))}
           >Next &raquo;</button> : <></>}
        </div> :   <></>
        }</>
    )
}

export default Pagination
