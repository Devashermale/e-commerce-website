import { createContext, useEffect, useReducer } from "react";

export const ProductContext = createContext()
export const ProductReducer = (state ,action) =>{
    switch(action.type){
        case"create product":
        return {product:action.payload}
        case"delete product":
        return{product:product.filter((p)=>p._id !==action.payload._id)}
       default:
       return null
    }
}
const AuthContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(ProductReducer,{
        product:null
    })
    return <AuthContext.Provider value={{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
} 