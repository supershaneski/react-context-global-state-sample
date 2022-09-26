import React from 'react'
import { GlobalContext } from '../store/GlobalState'

export default function LogoutButton(props) {
    return (
        <GlobalContext.Consumer>
        {
            ({state: {app: { isDarkMode }}}) => {
                return (
                    <button onClick={props.onClick} style={{
                        border: 0,
                        color: isDarkMode ? '#fff' : '#333',
                        outline: 'none',
                        backgroundColor: 'transparent',
                        borderRadius: '6px',
                        padding: '8px 12px',
                        textTransform: 'uppercase',
                        fontSize: '0.8em',
                        transition: '0.5s ease',
                    }}>{props.children}</button>
                )
            }
        }
        </GlobalContext.Consumer>
    )
}