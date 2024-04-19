import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from 'pages/RegisterPage/RegisterPage'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
