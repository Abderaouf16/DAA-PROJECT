import {createContext, useReducer,useEffect} from  'react'


export const AuthContext= createContext()

export const projectsReducer = (state, action)=>{
   // dispatch actions(cases)
    switch (action.type) {
        case 'ALL_PROJECTS':
            localStorage.setItem("posts", JSON.stringify(action.payload));
            console.log("state", state);
            return {products: action.payload}
    
        default:
            return state    
    }
}
//useReducer = usestate
export const projectContextProvider= ({children})=>{
    const initialState = { projects: [], userProjects: [], project: [] };
 const [state,dispatch ]= useReducer(projectsReducer, {
    user: null
 })
   // when we reaload we will check if there is a state 
 useEffect(()=>{
     const user = JSON.parse(localStorage.getItem('user'))

     // dispatch login action to update the global state
     // to match the user in the local storage
      if(user){
          dispatch({type: 'LOGIN', payload: user})
      }
 }, [])
 
 console.log(state)

 return (
    <AuthContext.Provider value={{...state,dispatch }}>
        {console.log('context state', state)}
          {children}
    </AuthContext.Provider>
 )
}