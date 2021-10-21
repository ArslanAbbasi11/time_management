export const createUsers= (token,obj)=> async (dispatch)=> {
    var fName=obj.firstName;
    var lName=obj.lastName;
    var mail=obj.email;
    var pass=obj.password;
    var cfmPass=obj.cfmPassword;
    var typ=obj.type;
    try{
     const res= await fetch('http://34.210.129.167/api/users', { 
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization' : 'Bearer'+token
       },
       body: JSON.stringify({firstName:fName,lastName:lName,email:mail,password:pass,password_confirmation:cfmPass,userType:typ})  
         });
         console.log("create user res",res);
        
         const result= await res.json(); 
         console.log("create result",result[0]);
         dispatch({
          type:"ALERT",
          payload:result[0]
        })
      
      }
      catch{
        dispatch({
          type:"ALERT",
          payload:"something went wrong"
        })
      }
        // const user=result.user;
         
        
       }
   