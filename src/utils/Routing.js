import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

// Pages
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import Dashboard from '../pages/home/Dashboard';
import VerifyEmail from '../pages/auth/VerifyEmail';
import Workspace from '../pages/auth/Workspace';

import { AuthProvider } from '../context/AuthContext';

const Routing = () =>{

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoute/>}>
          <Route path='/auth/workspace' element={<Workspace/>}/>
          <Route exact path='/' element={<Navigate to="/auth/workspace"/>} />
          <Route path='/dashboard/:id' element={<Dashboard/>}/>
          </Route>
          {/* Auth Routes */}
          <Route element={<PublicRoute/>}>
            <Route path='/auth/signin' element={<SignIn/>}/>
            <Route path='/auth/signup' element={<SignUp/>}/>
            <Route path='/auth/verify-email' element={<VerifyEmail/>}/>
          </Route>
          {/* Auth Routes */}
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default Routing