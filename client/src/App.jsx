import './App.css'
import { Route, Routes } from 'react-router-dom'
import { IntroPage } from './pages/IntroPage'
import { ProfileSettingPage } from './pages/ProfileSettingPage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<ProfileSettingPage />} />
      <Route path='/profile' element={<ProfileSettingPage />}/>
    </Routes>
    </>
  )
}

export default App
