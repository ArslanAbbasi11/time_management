const initState={
    workLogs:{},
    filter:false
}
export const workLogs=(state =initState, action)=>{
    switch (action.type) {
        case "WORKLOGS":
            return {
                ...state,
                workLogs:action.payload
            }
     case "FILTER":
        return {
            ...state,
           filter:action.payload
        }
        default:
            return state;
    }
}