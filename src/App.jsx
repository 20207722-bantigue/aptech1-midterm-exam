import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Navigation from './components/NavBar';
import { Routes, Route } from 'react-router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/*temporary*/}
     <Navigation />
      <div>
        <div>
          <Routes>
            <Route path='/Home' element={<Home />}>Home</Route>
            <Route path='/Profile' element={<Profile />}>Profile</Route>
            <Route path='/Signup' element={<Signup />}>Signup</Route>
            <Route path='/Success' element={<Success />}>Success</Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
