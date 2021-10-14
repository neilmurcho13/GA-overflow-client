import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../api/callerFunctions'

const Register = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      location: '',
      githubLink: '',
      linkedinLink: ''
      // status: ''
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
              <label>First name: </label>
              <div className='user-input'>
                <input
                  className='input'
                  name='firstName'
                  value={state.formData.firstName}
                  autoComplete='off'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>Last name: </label>
              <div className='user-input'>
                <input
                  className='input'
                  name='lastName'
                  value={state.formData.lastName}
                  autoComplete='off'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>Username: </label>
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

            {/* <select
              onChange={handleChange}
              name='status'
              value={setSelectOption}
            >
              <option value={state.formData.status}>student</option>
              <option value={state.formData.status}>alumni</option>
              <option value={state.formData.status}>instructor</option>
            </select> */}

            <div>
              <label>GA Location: </label>
              <div className='user-input'>
                <input
                  className='input'
                  name='location'
                  value={state.formData.location}
                  autoComplete='off'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>Github: </label>
              <div className='user-input'>
                <input
                  className='input'
                  name='githubLink'
                  value={state.formData.githubLink}
                  autoComplete='off'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label>LinkedIn: </label>
              <div className='user-input'>
                <input
                  className='input'
                  name='linkedinLink'
                  value={state.formData.linkedinLink}
                  autoComplete='off'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='auth-btn'>
              <input type='submit' value='Register' />
              <i className='fa fa-user-plus'></i>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
