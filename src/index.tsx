import ReactDOM from 'react-dom'
import { App } from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// ReactDOM.render(<App />, document.getElementById('root'))
// import React from 'react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
