import { createContext, useReducer } from 'react'

const initialState = {
    app: {
        isDarkMode: true,
    },
    login: {
        name: '',
        isLogged: false,
    },
}

const appReducer = (state, action) => {
    switch(action.type) {
        case 'app-set':
            return {
                ...state,
                ...action.payload,
            }
        case 'toggle-mode':
            return {
                ...state,
                isDarkMode: !state.isDarkMode,
            }
        default:
            return state
    }
}

const loginReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return {
                ...state,
                name: action.payload.name,
                isLogged: true,
            }
        case 'logout':
            return {
                ...state,
                name: '',
                isLogged: false,
            }
        default:
            return state
    }
}

const combinedReducers = ({ app, login }, action) => ({
    app: appReducer(app, action),
    login: loginReducer(login, action),
})

const GlobalContext = createContext(initialState)

const GlobalState = ({ children }) => {

    const [state, dispatch] = useReducer(combinedReducers, initialState)
    
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
        { children }
        </GlobalContext.Provider>
    )

}

export default GlobalState

export { GlobalContext, GlobalState }

