import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// --css--
import './styles/style.scss'
import { ThemeProvider, createTheme } from '@mui/material'

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#2D539D",
      dark: "#345391",
      light: "#5478C1",
      contrastText: "#272727"
    },
    secondary: {
      main: "#C33C54",
      dark: "#9D1730",
      light: "#C16375",
      contrastText: '#F8F8F8',
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
