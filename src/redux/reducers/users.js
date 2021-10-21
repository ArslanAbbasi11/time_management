const initState={
    all:{}
}
export const users=(state =initState, action)=>{
    switch (action.type) {
        case "USERS":
            return {
                ...state,
                all:action.payload
            }
    
        default:
            return state;
    }
}