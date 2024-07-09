import React from 'react'
import './CSS/Login.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="logincontainer">
        <h1>Sign Up</h1>
        <div className="loginfields">
          <input type="text" name="" id="" placeholder='Enter your name' />
           <input type="email" name="" id="" placeholder='Enter your password' />
           <input type="password" name="" id="" />
        </div>
        <button>Continue</button>
        <p className='login'>Already have an account? <span>Login here</span></p>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , I agree to the terms and policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
