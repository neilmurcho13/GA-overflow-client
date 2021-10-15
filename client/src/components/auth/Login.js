import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { setToken } from '../../api/authFunctions'
import { loginUser } from '../../api/callerFunctions'
import Register from './Register'

const Login = () => {
  const history = useHistory()
  const [state, setState] = useState({
    formData: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(state.formData)
      let userDetails = JSON.parse(localStorage.getItem('user'))
      if (res.status === 202) {
        setToken(res.data.token)
        history.push('/')
        location.reload()
      }
    } catch (err) {
      console.error('error logging in user', err)
    }
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    }

    setState({ formData })
  }

  return (
    <section className='main-content'>
      <div>
        <div className='auth-container'>
          <form onSubmit={handleSubmit}>
            <div>
              <label>email: </label>
              <div className='user-input'>
                <input
                  name='email'
                  value={state.formData.email}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>password: </label>
              <div className='user-input'>
                <input
                  name='password'
                  type='password'
                  value={state.formData.password}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='auth-btn'>
              <input type='submit' value='login' />
              <i className='fa fa-sign-in'></i>
            </div>

            <div className='register-link'>
              New to GA?
              <Link to='/register' className='link-btn'>
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
