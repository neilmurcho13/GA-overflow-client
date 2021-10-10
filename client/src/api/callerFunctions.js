import axios from 'axios'

export const getAllBlogs = async () => {
  const options = {
    method: 'GET',
    url: `http://localhost:3000/api/blogs`
  }

  const { data } = await axios.request(options)

  console.log('coming from getAllBlogs', data)
  return data
}

export const getBlog = async (id) => {
  const options = {
    method: 'GET',
    url: `http://localhost:3000/api/blogs/${id}`
  }

  const { data } = await axios.request(options)

  console.log('coming from getBlog', data)
  return data
}

export const searchBlogs = async (q) => {
  const options = {
    method: 'GET',
    url: `http://localhost:3000/api/search`,
    params: {
      q
    }
  }

  const { data } = await axios.request(options)

  console.log('coming from search', data)
  return data
}

export const createBlog = (formData) => {
  console.log('Neil CallerFunction works')
  return axios.post(`http://localhost:3000/api/blogs`, formData)
}

export const deleteBlog = (id) => {
  return axios.delete(`http://localhost:3000/api/blogs/${id}`)
}

// AUTH METHODS

export const registerUser = (formData) => {
  return axios.post(`http://localhost:3000/api/register`, formData)
}

export const loginUser = (formData) => {
  return axios.post(`http://localhost:3000/api/login`, formData)
}
