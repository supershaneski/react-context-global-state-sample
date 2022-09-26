import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../store/GlobalState'
import classes from './Home.module.css'
import Title from '../components/Title'
import Text from '../components/Text'
import LogoutButton from '../components/LogoutButton'

export default function About() {

    const {state, dispatch} = React.useContext(GlobalContext)
    const navigate = useNavigate()
    
    React.useEffect(() => {

        try {
            window.scrollTo(0, 0)
        } catch(err) {
            //
        }

    }, [])

    React.useEffect(() => {

        document.body.style.backgroundColor = state.app.isDarkMode ? '#333' : '#F5F5F5'

    }, [state.app.isDarkMode])

    if(!state.login.isLogged) {
        return <Navigate to="/login" replace={true} />
    }

    const handleLogout = () => {

        dispatch({type: 'logout'})

    }

    const handleToggleMode = () => {
        dispatch({type: 'toggle-mode'})
    }

    const handleGotoPage = (page) => () => {
        
        navigate(page)

    }

    return (
        <div className={classes.container}>
            <div className={classes.header} style={{
                backgroundColor: state.app.isDarkMode ? '#0006' : '#FFF6',
            }}>
                <div className={classes.headerLeft} />
                <div className={classes.headerCenter}>
                    <div className={classes.headerTitle}>
                        <Title>About</Title>
                    </div>
                </div>
                <div className={classes.headerRight}>
                    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.inner}>
                    <div className={classes.intro}>
                        <div className={classes.introText}>
                            <Text>Hello, <span className={classes.introName}>{state.login.name}</span></Text>
                        </div>
                        <div className={classes.action}>
                            <button className={[classes.button, classes.color1].join(' ')} onClick={handleToggleMode}>Toggle Mode</button>
                            <button className={[classes.button, classes.color2].join(' ')} onClick={handleGotoPage('/')}>Go to Home</button>
                            <button className={[classes.button, classes.color3].join(' ')} onClick={handleGotoPage('/test')}>Go to NotFound</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}