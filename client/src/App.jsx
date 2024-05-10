import React, { lazy } from 'react'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'


const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Chat = lazy(() => import('./pages/chat'));
const Group = lazy(() => import('./pages/group'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<Chat />} />
        <Route path="group" element={<Group />} />
      </Routes>
    </Router>
  )
}

export default App