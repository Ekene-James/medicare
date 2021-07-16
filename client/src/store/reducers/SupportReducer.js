export const SupportReducer = (state, action) => {
    switch(action.type){
        case "GET_SUPPORT_MSG" : 
        return {
            ...state,
            msgs : [action.payload]
        };
        default : return state
    };

}