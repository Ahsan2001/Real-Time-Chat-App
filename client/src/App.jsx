import React, { lazy,Suspense } from 'react'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/auth/protectedRoute';
import LayoutLoader from './components/layout/loader';


const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Chat = lazy(() => import('./pages/chat'));
const Group = lazy(() => import('./pages/group'));
const NotFound = lazy(() => import('./pages/notFound'));

const App = () => {
  

  const user = !false;

  return (
    <Router>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>

          <Route element={<ProtectedRoute  user={user} />} >
              <Route path="/" element={<Home />} />
              <Route path="chat" element={<Chat />} />
              <Route path="group" element={<Group />} />
          </Route>


         <Route path="login" element={
            <ProtectedRoute user={!user} redirect="/">
              <Login />
            </ProtectedRoute>} 
          />

          <Route path="*" element={<NotFound /> }/>

        </Routes>
      </Suspense>
    </Router>

  )
}

export default App