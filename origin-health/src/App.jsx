import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Unauthorized from './pages/Unauthorized';
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from './pages/AdminDashboard';
import Dashboard from './pages/Dashboard';
import RequireAuth from './components/RequireAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const ROLES = {
  'User': "2001",
  // 'Editor': 1984,
  'Admin': "5150"
}

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
      {/* <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
       <Route path="AdminDashboard" element={<AdminDashboard/>} />
       <Route path="/dashboard" element={<Dashboard/>} /> */}
      <Route path="/" element={<Layout />}>
        
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        <Route path="unauthorized" element={<Unauthorized />} />


        <Route element={<RequireAuth allowedRoles={[ROLES.User ,ROLES.Admin]} />}>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="admin-dashboard" element={<AdminDashboard/>} /> 
        </Route>
      </Route>
      
    </Routes>
  )
}

export default App
