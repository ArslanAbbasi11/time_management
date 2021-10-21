const alert="";
export const alerts=(state=alert,action)=>{
    switch (action.type) {
        case "ALERT":
          return{
              ...state,
              alert:action.payload
          }
        
        default:
         return   state;
          
}
}