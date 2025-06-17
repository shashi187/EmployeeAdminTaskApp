import Login from './components/pages/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import './App.css'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './components/context/AuthProvider'

const App = () => {
  const [userData,setUserData] = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)}
    },[])
  const handleLogin = (email,password) => {
    if (email== 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData) {
      const employee = userData.find(emp => emp.email === email && emp.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data: employee}))
      }
    }else{
      alert('Invalid credentials')
    }
  }
  return (
      <>
      {!user ? <Login handleLogin={handleLogin} /> :''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : ''}
      {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : ''}
      </>
    )
}

export default App
