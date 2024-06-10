import React, { lazy,Suspense } from 'react'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/auth/protectedRoute';
import LayoutLoader from './components/layout/loader';


const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Chat = lazy(() => import('./pages/chat'));
const Group = lazy(() => import('./pages/group'));
const NotFound = lazy(() => import('./pages/notFound'));


const AdminLogin = lazy(() => import('./pages/admin/login'));
const AdminDashboard = lazy(() => import('./pages/admin/dashboard'));
const UserManagement = lazy(() => import('./pages/admin/userManagement'));
const ChatManagement = lazy(() => import('./pages/admin/chatManagement'));
const MessageManagement = lazy(() => import('./pages/admin/messageManagement'));


const App = () => {

  const user = !false;

  return (
    <Router>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>

          <Route element={<ProtectedRoute  user={user} />} >
              <Route path="/" element={<Home />} />
              <Route path="chat/:id" element={<Chat />} />
              <Route path="group" element={<Group />} />
          </Route>


         <Route path="/login" element={
            <ProtectedRoute user={!user} redirect="/">
              <Login />
            </ProtectedRoute>
          }/>


          <Route path="/admin" element={ <AdminLogin />}/>
          <Route path="/admin/dashboard" element={ <AdminDashboard />}/>
          <Route path="/admin/user-management" element={ <UserManagement />}/>
          <Route path="/admin/chat-management" element={ <ChatManagement />}/>
          <Route path="/admin/message-management" element={ <MessageManagement />}/>

          <Route path="*" element={<NotFound /> }/>

        </Routes>
      </Suspense>
    </Router>

  )
}

export default App