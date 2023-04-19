import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { MantineProvider } from "@mantine/core"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles 
      theme={{
        colorScheme: "dark",
        primaryColor: "blue"
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
