
export const crudUsers=(load,token,act)=>async(dispatch)=>{
 
  
switch (act) {
    case "DEL":
      try{
        const delRes= await fetch(`http://34.210.129.167/api/users/${load}`, { 
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer'+token
            }
              });
              const delResult= await delRes.json(); 
              console.log("delete response ",delResult);
              dispatch({
                type:"ALERT",
                payload:delResult.message
              })
            }
            catch{
              dispatch({
                type:"ALERT",
                payload:"something went wrong"
              })
            }
        break;
        case "UPDATE":
          console.log("data "+load);
          var id=load.id;
          var fName=load.firstName;
          var lName=load.lastName;
          var mail=load.email;
          var pass=load.password;
          var cfmPass=load.cfmPassword;
         console.log("id in update action ",load.id);
         try{
          const updateRes= await fetch(`http://34.210.129.167/api/users/${id}`, { 
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer'+token
              },
              body: JSON.stringify({firstName:fName
                                   ,lastName:lName
                                   ,email:mail
                                   ,password:pass
                                   ,password_confirmation:cfmPass})  
                });
                const updateResult= await updateRes.json(); 
                console.log("update response ",updateResult);
                dispatch({
                  type:"ALERT",
                  payload:updateResult.message
                })
              } catch{
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