import './App.css'
import { Route, Routes } from 'react-router-dom'
import { IntroPage } from './pages/IntroPage'
import { ProfileSettingPage } from './pages/ProfileSettingPage'
import { MainPage } from './pages/MainPage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<IntroPage />} />
      <Route path='/profile' element={<ProfileSettingPage />}/>
      <Route path='/main' element={<MainPage />} />
    </Routes>
    </>
  )
}

export default App
