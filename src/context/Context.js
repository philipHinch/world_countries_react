import { createContext, useReducer } from "react"
import { Reducer } from "./Reducer"

//create context
export const Context = createContext()

//create provider
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer,
        {
            data: null,
            searchValue: null,
            isLoading: true,
            isDarkTheme: false
        }
    )

    //return provider surrounding children
    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {children}
        </Context.Provider>
    )
}