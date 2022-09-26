react-context-global-state-sample
================

This React project is bootstrapped using [Vite](https://vitejs.dev/guide/).

# Motivation

This is a sample project to demonstrate using React Context to manage global state.

# GlobalState.jsx

This is the main file that manages global application state.

You will notice that it appears similar to [React Redux](https://react-redux.js.org).

```javascript
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
```


# Installation

Clone the repository, install the dependencies and run

```sh
$ git clone https://github.com/supershaneski/react-context-global-state-sample.git myproject

$ cd myproject

$ npm install

$ npm start
```

Your browser will open to `http://localhost:3001/` or some other port depending on the availability.
