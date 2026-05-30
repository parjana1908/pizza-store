import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from "../config/firebase";

import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async (e) => {

    e.preventDefault()
try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert('Login Successful')

      navigate('/home')

    } catch (error) {

      alert(error.message)

    }
  }
  return (
    <div className='min-h-screen bg-orange-50 flex justify-center items-center'>

      <form
        onSubmit={login}
        className='bg-white p-8 rounded-lg shadow-lg w-[350px]'
      >

        <h1 className='text-3xl font-bold text-center text-orange-500 mb-5'>
          Login
        </h1>

        <input
          type='email'
          placeholder='Email'
          className='w-full border p-3 mb-4 rounded-lg'
          onChange={(e) => setEmail(e.target.value)}
        />
 <input
          type='password'
          placeholder='Password'
          className='w-full border p-3 mb-4 rounded-lg'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='w-full bg-orange-500 text-white p-3 rounded-lg'>
          Login
        </button>

        <p className='mt-4 text-center'>
          Don't have account?
          <Link to='/signup' className='text-orange-500 ml-2'>
            Signup
          </Link>
        </p>

      </form>

    </div>
    )
}

export default Login