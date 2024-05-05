import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Failure from './Pages/Failure/Failure'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
