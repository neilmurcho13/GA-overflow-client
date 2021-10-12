export const setToken = (token) => {
  console.log('the token is ', token)
  window.localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(users))
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
