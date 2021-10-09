import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../api/callerFunctions'

const Register = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      username: '',
      email: '',
      password: ''
    }
  })

  const handleSubmit = async (e) => {
    console.log('submit fired')
    e.preventDefault()

    try {
      const res = await registerUser(state.formData)
      if (res.status === 201) {
        history.push('/login')
      }
    } catch (err) {
      console.error('Error registering user', err)
    }
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    }

    setState({ formData })
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className='label'>Username</label>
        <input
          className='input'
          placeholder='Username'
          name='username'
          value={state.formData.username}
          autoComplete='off'
          onChange={handleChange}
        />
      </div>

      <div>
        <label className='label'>Email</label>
        <input
          className='input'
          placeholder='Email'
          name='email'
          autoComplete='off'
          value={state.formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className='label'>Password</label>
        <input
          className='input'
          placeholder='Password'
          name='password'
          type='password'
          value={state.formData.password}
          onChange={handleChange}
        />
      </div>

      <div className='field'>
        <input type='submit' value='Register' />
      </div>
    </form>
  )
}

export default Register
