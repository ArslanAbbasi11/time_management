const loginUser={};
export const session=(state = loginUser, action)=>{
    switch (action.type){
        case "LOGIN":
        return {
            ...state,
            loginUser:{user:action.payload,isLogin:true}
        }
        case "LOGOUT":
        return {
            ...state,
            loginUser:{isLogin:false}
        }
        case "LOGIN_STATUS_TRUE":
        return {
            ...state,
            loginUser:{...state.loginUser,isLogin:true}
        }
        default:
            return state
    }
}
