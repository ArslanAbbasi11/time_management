

export const fetchData= (token,page)=>async (dispatch)=> {
    

    try{
        const usersRes= await fetch(`http://34.210.129.167/api/users?page=${page}`, { 
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer'+token
            },
              });
              const resultUsers= await usersRes.json(); 
              console.log("got users ",resultUsers);
              dispatch({
                type:"USERS",
                payload:resultUsers
            });
          }
          catch{ dispatch({
            type:"ALERT",
            payload:"something went wrong"
        });

          }
           
}
