import { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword(''); 
  }
  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-300 to-blue-900'>  
        <div className='border-white bg-[#111] justify-center items-center flex flex-col mx-auto h-[50%] w-[50%] rounded-2xl'>
          <p className='text-3xl text-green-400 mb-2'>Login</p>
          <form className='flex flex-col gap-4 w-2/4 mx-auto border rounded-2xl p-3 bg-[#1c1c1c] ' onSubmit={handleSubmit}>
              <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email" required className='outline-0' placeholder='example@gmail.com' />
              <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" required className='outline-0' placeholder='Enter Password'/>
              <input type="submit" required className='p-2 flex-none border-amber-200 rounded-4xl bg-blue-500'/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
