import React from 'react'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import { GlobalContext } from '../store/GlobalState'
import classes from './Login.module.css'

export default function Login() {

    const {state, dispatch} = React.useContext(GlobalContext)
    
    const location = useLocation()
    const navigate = useNavigate()
    const [name, setName] = React.useState('')

    const handleLogin = () => {
        
        dispatch({type: 'login', payload: {
            name: name,
        }})

        const prevPage = location.state?.prev || '/'

        navigate(prevPage)

    }

    if(state.login.isLogged) {
        return (
            <Navigate to="/" replace={true} />
        )
    }
    
    const textLineColor = state.app.isDarkMode ? '#FFF' : '#333'
    const backColor = state.app.isDarkMode ? '#FFF' : '#E6E6E6'

    return (
        <div className={classes.container}>
            <div className={classes.dialog} style={{
                borderColor: textLineColor
            }}>
                <div className={classes.inner}>
                    <h4 className={classes.title} style={{
                        color: textLineColor
                    }}>Login</h4>
                    <input style={{
                        backgroundColor: backColor
                    }} className={classes.text} 
                    type='text' 
                    placeholder='Username'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <button 
                    disabled={name.length <= 3}
                    style={{
                        backgroundColor: name.length > 3 ? '#67AEFF' : '#CCC'
                    }} onClick={handleLogin} className={classes.button}>Login</button>
                </div>
            </div>
        </div>
    )
}