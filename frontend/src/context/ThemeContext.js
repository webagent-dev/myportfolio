import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const InitialState = {darkMode: false}

const Reducer = (state, action) => {
        switch(action.type){
            case 'Toggle':
                return{
                    darkMode : !state.darkMode
                }
                default:

                return state
        }
}

export const ThemeProvider = (props) => {
    const [state, dispatch ] = useReducer(Reducer, InitialState)
    return(
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
            </ThemeContext.Provider>
    )
}