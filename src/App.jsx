import React from 'react'
import GetStarted from './Pages/GetStarted'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ForgotPassword from './Pages/ForgotPassword'
import OtpVarify from './Pages/OtpVarify'
import { Toaster } from 'react-hot-toast'
import ResetPassword from './Pages/ResetPassword'
import Home from './Pages/Home'


const App = () => {
  return (
    <div className='w-full h-full font-poppins'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetStarted />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}>
          <Route path=':refId' element={<Signup/>}/>
        </Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/verify' element={<OtpVarify/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/home' element={<Home/>}/>
        
      </Routes>
      <Toaster/>
      </BrowserRouter>
    </div>
  )
}

export default App
