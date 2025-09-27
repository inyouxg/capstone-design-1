import './App.css'
import { Route, Routes } from 'react-router-dom'
import { IntroPage } from './pages/IntroPage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<IntroPage />} />
      <Route />

    </Routes>
    </>
  )
}

export default App
