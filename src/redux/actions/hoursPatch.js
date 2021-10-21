export const hoursPatch=(whours,token,id)=>async(dispatch)=>{
 
    console.log("prefered hours "+whours);
           
         try{
    const updateRes= await fetch(`http://34.210.129.167/api/users/${id}/preferred-working-hours`, {
        
    

        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer'+token
        },
        body: JSON.stringify({  workingHours:whours
                             })  
          });
          const updateResult= await updateRes.json(); 
          console.log("update response ",updateResult);
          dispatch({
            type:"ALERT",
            payload:updateResult.message
          }
          )
        }
          catch{
            dispatch({
              type:"ALERT",
              payload:"something went wrong"
            }
            )
          }
             
                }
        