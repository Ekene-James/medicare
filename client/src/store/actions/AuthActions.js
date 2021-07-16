
export const login = (role) => {
return {
    type : 'LOGIN',
    payload:role
}
    
}
export const logout = () => {
return {
    type : 'LOGOUT'
}
    
}
export const getRoute = (route) => {
return {
    type : 'ROUTE',
    payload : route
}
    
}

