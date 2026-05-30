import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from "../config/firebase";

import { Link, useNavigate } from 'react-router-dom'

function Signup() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = async (e) => {

    e.preventDefault()
try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert('Signup Successful')

      navigate('/')

    } catch (error) {

      alert(error.message)

    }
  }
  return (
    <div className='min-h-screen bg-orange-50 flex justify-center items-center'>

      <form
        onSubmit={signup}
        className='bg-white p-8 rounded-lg shadow-lg w-[350px]'
      >

        <h1 className='text-3xl font-bold text-center text-orange-500 mb-5'>
          Signup
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
          Signup
        </button>

        <p className='mt-4 text-center'>
          Already have account?
          <Link to='/' className='text-orange-500 ml-2'>
            Login
          </Link>
        </p>

      </form>

    </div>
    )
}

export default Signup