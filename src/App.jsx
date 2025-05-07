import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import User from './Pages/User.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/user' element={<User/>}/>



</Routes>

</BrowserRouter>

  )
}

export default App