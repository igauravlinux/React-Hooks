import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppContextProvider from './context/AppContext.jsx'
import UserContextProvider from './context/UserContext.jsx'
import  ThemeContextProvider  from './context/ThemeContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <AppContextProvider>
    <UserContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserContextProvider>
  </AppContextProvider>
)
