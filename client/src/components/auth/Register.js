import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../api/callerFunctions'

const Register = () => {
  const [userId, setUserId] = useState('')
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
      console.log(res)
      if (res.status === 201) {
        history.push('/login')
        console.log('before state', res.data._id)
        const currentId = res.data._id
        console.log(currentId, 'this')
        // setUserId(currentId)
        // console.log('current user id is', userId)
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
  }

  return (
    <section className='main-content'>
      <div>
        <div className='auth-container'>
          <form onSubmit={handleSubmit}>
            <div>
              <label>username: </label>
              <div className='user-input'>
                <input
                  className='input'
                  name='username'
                  value={state.formData.username}
                  autoComplete='off'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>email: </label>
              <div className='user-input'>
                <input
                  className='input'
                  name='email'
                  autoComplete='off'
                  required
                  value={state.formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>password: </label>
              <div className='user-input'>
                <input
                  className='input'
                  name='password'
                  type='password'
                  value={state.formData.password}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='auth-btn'>
              <input type='submit' value='Register' />
              <i class='fa fa-user-plus'></i>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
