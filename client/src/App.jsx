import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { ModalProvider } from './contexts/ModalContext'

function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  )
}

export default App
