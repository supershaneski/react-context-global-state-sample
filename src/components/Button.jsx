import React from 'react'
import { GlobalContext } from '../store/GlobalState'

export default function Button(props) {
    return (
        <GlobalContext.Consumer>
        {
            ({state: {app: { isDarkMode }}}) => {
                return (
                    <button onClick={props.onClick} style={{
                        border: '0px solid #FFF',
                        padding: 8,
                        borderRadius: 6,
                        backgroundColor: '#67AEFF',
                        textTransform: 'uppercase',
                        color: '#FFF'
                    }}>{props.children}</button>
                )
            }
        }
        </GlobalContext.Consumer>
    )
}