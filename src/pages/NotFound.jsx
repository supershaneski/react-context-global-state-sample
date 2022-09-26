import React from 'react'
import { GlobalContext } from '../store/GlobalState'

export default function NotFound() {
    const { state } = React.useContext(GlobalContext)
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <div style={{
                    fontSize: '1.9em',
                    paddingRight: '16px',
                    marginRight: '16px',
                    borderRight: state.app.isDarkMode ? '1px solid #FFF' : '1px solid #333',
                    color: state.app.isDarkMode ? '#FFF' : '#333',
                }}>404</div>
                <div style={{
                    fontSize: '1em',
                    color: state.app.isDarkMode ? '#FFF' : '#333',
                }}>Page Not Found</div>
            </div>
        </div>
    )
}