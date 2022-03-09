import { createContext, useReducer, useState } from 'react'
import { port } from '../data'

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

const allCategory = ['all']
export const ThemeProvider = (props) => {
    const [state, dispatch ] = useReducer(Reducer, InitialState)
    const [cat, setCat] = useState()
    const [items, setItems] = useState(port)

    return(
        <ThemeContext.Provider value={{state, dispatch, cat, setCat, items, setItems}}>
            {props.children}
            </ThemeContext.Provider>
    )
}