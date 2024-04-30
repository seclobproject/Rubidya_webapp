import React from 'react'
import GetStarted from './Pages/GetStarted'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ForgotPassword from './Pages/ForgotPassword'
import OtpVarify from './Pages/OtpVarify'


const App = () => {
  return (
    <div className='w-full h-full'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetStarted />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/verify' element={<OtpVarify/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
