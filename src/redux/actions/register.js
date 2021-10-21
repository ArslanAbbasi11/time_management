
export const register= (obj)=> async (dispatch)=> {
   var fName=obj.firstName;
   var lName=obj.lastName;
   var mail=obj.email;
   var pass=obj.password;
   var cfmPass=obj.cfmPassword;


   try{
    const res= await fetch('http://34.210.129.167/api/register', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstName:fName,lastName:lName,email:mail,password:pass,password_confirmation:cfmPass})  
        });
        console.log("register res",res);
        const result= await res.json(); 
        console.log("register result",result);
      }
      catch{
        alert("something went wrong please try again!!");
      }
       // const user=result.user;
        
       
      }
  