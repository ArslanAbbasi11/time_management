export const loginStatus=(action)=>{
    switch (action) {
        case "LOGOUT":
            return{
                type:"LOGOUT"
            }
            case "LOGIN_STATUS_TRUE":
                return{
                    type:"LOGIN_STATUS_TRUE"
                }
        
        default:
            break;
    }
  
}