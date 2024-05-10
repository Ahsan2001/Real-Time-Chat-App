import React, { lazy } from 'react'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/auth/protectedRoute';


const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Chat = lazy(() => import('./pages/chat'));
const Group = lazy(() => import('./pages/group'));
const NotFound = lazy(() => import('./pages/notFound'));

const App = () => {
  

  const user = !false;

  return (
    <Router>

      <Routes>

        <Route element={<ProtectedRoute  user={user} />} >
            <Route path="/" element={<Home />} />
            <Route path="chat" element={<Chat />} />
            <Route path="group" element={<Group />} />
        </Route>


      <Route path="login" element={
        <ProtectedRoute user={!user} redirect="/">
          <Login />
        </ProtectedRoute>} />


        <Route path="*" element={<NotFound /> }/>

      </Routes>



    </Router>

  )
}

export default App