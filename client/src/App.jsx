import { useState } from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login'
import SuccessLogin from './components/SuccessLogin'


function App() {
  const [count, setCount] = useState(0)

  return (
       <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/success-login' element={<SuccessLogin/>}/>
        </Routes>
       </Router>
  )
}

export default App
