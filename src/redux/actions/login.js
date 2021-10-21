
export const login= (obj)=> async (dispatch)=> {
   
  try{
  const resLogin= await fetch('http://34.210.129.167/api/login', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:obj.email,password:obj.password})  
      });
      const resultLogin= await resLogin.json(); 
    
      const user=resultLogin.user;
      console.log("in action login ",user)
      const token=resultLogin.token;
      localStorage.setItem('token', token);
      localStorage.setItem('firstName', user.firstName);
      localStorage.setItem('lastName', user.lastName);
     dispatch({
          type:"LOGIN",
          payload:user
      });}
      catch{
        alert("something went wrong please try again!!");
      }
    }
