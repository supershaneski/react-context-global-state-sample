import React from 'react'
import { GlobalContext } from '../store/GlobalState'

export default function Text({ children }) {
    return (
        <GlobalContext.Consumer>
        {
            ({state: { app: { isDarkMode } }}) => {
                return (
                    <p style={{
                        color: isDarkMode ? '#FFF' : '#333'
                    }}>{ children }</p>
                )
            }
        }
        </GlobalContext.Consumer>
    )
}