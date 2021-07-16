export const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN" : 
        return {
            authenticated : true,
            role:action.payload
        };
        case "LOGOUT" : 
        return {
            authenticated : false
        };
        case "ROUTE" : 
        return {
            ...state,
            route : action.payload
        };
        default : return state
    };

}