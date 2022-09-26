import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { GlobalContext } from './store/GlobalState'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export default () => {
  
  const { state, dispatch } = React.useContext(GlobalContext)
  
  React.useEffect(() => {

    const handleModeChange = (e) => {

      const isDarkMode = e.matches
      
      dispatch({type: 'app-set', payload: { isDarkMode: isDarkMode }})
      document.body.style.backgroundColor = isDarkMode ? '#333' : '#F5F5F5'

    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleModeChange)

    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    
    dispatch({type: 'app-set', payload: { isDarkMode }})
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#F5F5F5'

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleModeChange)
    }

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}