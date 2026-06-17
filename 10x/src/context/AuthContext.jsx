import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

export const AuthReducer = (state ,action)=>{
        switch(action.type){
        case "LOGIN":
            return {user:action.payload}
        case"LOGOUT":
        return{user:null}
        }

}
 const AuthContextProvider = ({children})=>{
  const [state ,dispatch] = useReducer(AuthReducer ,{user:null})

  useEffect(()=>{
    const user = localStorage.getItem(('user'))
    if (user) {
        dispatch:({type:'LOGIN',payload:user})
    }
    
  },[])
  return <AuthContext.Provider value={{...state ,dispatch}}>
    {children}
  </AuthContext.Provider>
 }
