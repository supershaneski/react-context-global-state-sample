import React from 'react'
import { GlobalContext } from '../store/GlobalState'

export default function Title({ children }) {
    return (
        <GlobalContext.Consumer>
        {
            ({state: { app: { isDarkMode } }}) => {
                return (
                    <h4 style={{
                        color: isDarkMode ? '#FFF' : '#333',
                        fontSize: '1.5em',
                    }}>{ children }</h4>
                )
            }
        }
        </GlobalContext.Consumer>
    )
}