export const createWorkLog=(token,obj)=> async (dispatch)=> {
    var date=obj.logDate;
    var hours=obj.hours;
    var desc=obj.description;
  
     const res= await fetch('http://34.210.129.167/api/work-logs', { 
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization' : 'Bearer'+token
       },
       body: JSON.stringify({logDate:date,hours:hours,description:desc})  
         });
         console.log("create worklog res",res);
        
         const result= await res.json(); 
         console.log("worklog result",result);
         if(result.success===true){
            dispatch({
                type:"ALERT",
                payload:"work log created sucessfully"
              })
         }
         else{
            dispatch({
                type:"ALERT",
                payload:result.message
              })
    
         }
        
       }
   
       export const fetchWorkLogs=(token,id,startDate,endDate)=>async (dispatch)=> {
             switch (true){
               case !startDate && !endDate:
                try{
                  const logRes= await fetch(`http://34.210.129.167/api/user/${id}/work-logs`, { 
                      method: 'GET',
                      headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : 'Bearer'+token
                      },
                        });
                        const resultWorkLogs= await logRes.json(); 
                        console.log("got work logs ",resultWorkLogs);
                        dispatch({
                          type:"WORKLOGS",
                          payload:resultWorkLogs.workLogs
                      });
                      dispatch({
                        type:"FILTER",
                        payload:false
                    });
                    }
                    catch{
                      dispatch({
                        type:"WORKLOGS",
                        payload:"something went wrong"
                    });
                  
                    }
                 break;
                 case startDate!=="" && endDate!=="":
                   console.log(endDate);
                  try{
                    const logRes= await fetch(`http://34.210.129.167/api/work-logs/${startDate}/${endDate}`, { 
                        method: 'GET',
                        headers: {
                          'Content-Type': 'application/json',
                          'Authorization' : 'Bearer'+token
                        },
                          });
                          const resultWorkLogs= await logRes.json(); 
                          console.log("got work logs ",resultWorkLogs);
                          dispatch({
                            type:"WORKLOGS",
                            payload:resultWorkLogs
                        });
                        dispatch({
                          type:"FILTER",
                          payload:true
                      });
                      }
                      catch{
                        dispatch({
                          type:"Alert",
                          payload:"something went wrong"
                      });
                      }
                   break;
             
               default:
                 break;
             }
       }