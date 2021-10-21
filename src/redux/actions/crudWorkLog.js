
export const crudWorkLog=(load,token,act)=>async(dispatch)=>{
 
  
    switch (act) {
            case "UPDATE":
              console.log("data "+load);
            
              var id=load.id;
              var userId=load.userId;
              var logDate=load.logDate;
              console.log("date ",logDate);
              var hours=load.hours;
              var desc=load.description;
            
             console.log("id in update action ",load.id);
             console.log("date ",logDate);
             try{
              const updateRes= await fetch(`http://34.210.129.167/api/user/${userId}/work-logs/${id}`, { 
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer'+token
                  },
                  body: JSON.stringify({logDate:logDate
                                       ,hours:hours
                                       ,description:desc
                                       })  
                    });
                    const updateResult= await updateRes.json(); 
                    console.log("update response ",updateResult);
                    if(updateResult.success){
                    dispatch({
                      type:"ALERT",
                      payload:"worklogs updated sucessfully"
                    })}
                  }catch{
                    dispatch({
                      type:"ALERT",
                      payload:"something went wrong"
                    })
                  }
              break;
        default:
            break;
    }
    
    }