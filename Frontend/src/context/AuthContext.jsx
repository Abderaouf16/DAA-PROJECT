import {createContext, useReducer} from  'react'


export const AuthContext= createContext()

export const authReducer = (state, action)=>{
   // dispatch actions(cases)
    switch (action.type) {
        case 'SIGNUP':
            return {user: action.payload}
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return  {user:null} 
        default:
            return state    
    }
}
//useReducer = usestate
export const AuthContextProvider= ({children})=>{
 const [state,dispatch ]= useReducer(authReducer, {
    user: null
 })
 console.log(state)

 return (
    <AuthContext.Provider value={{...state,dispatch }}>
        {console.log('context state', state)}
          {children}
    </AuthContext.Provider>
 )
}