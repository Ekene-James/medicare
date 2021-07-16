
export const getSupport = async (dispatch) => {
    try {
        dispatch({
            type : "GET_SUPPORT_MSG",
            payload : 'id'
        })
        
    } catch (error) {
        console.log(error);
      
    }

    
}

