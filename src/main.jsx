import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux'
import  Store  from './Redux/store.jsx'
const theme = createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={Store}> {/* Use store without curly braces */}
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);