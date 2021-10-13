import axios from 'axios'

export const setToken = (token) => {
  console.log('the token is ', token)
  window.localStorage.setItem('token', token)
}

export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const removeToken = () => {
  return window.localStorage.getItem('token')
}

export const getPayLoad = () => {
  const token = getToken()
  // this will return true or false
  if (!token) {
    // if the user isnt signed in
    return false
  }

  const parts = token.split('.')

  if (parts.length < 3) {
    // if there is less than 3 '.' it mean you are not logged in
    return false
  }

  return JSON.parse(window.atob(parts[1]))
}

export const isLoggedIn = () => {
  const token = getToken()

  if (!token) {
    // if no token, you are not logged in
    return false
  }

  const parts = token.split('.')

  if (parts.length < 3) {
    // if there is less than 3 '.' it mean you are not logged in
    return false
  }

  return JSON.parse(window.atob(parts[1]))
}

export const getMyProfileData = async () => {
  const options = {
    method: 'GET',
    url: `http://localhost:3000/api/user`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }

  const { data } = await axios.request(options)

  return data
}
