import axios from "axios";

export const getAllBlogs = async () => {
  const options = {
    method: "GET",
    url: `http://localhost:3000/api/blogs`
  };

  const { data } = await axios.request(options);

  return data;
};

export const getBlog = async (id) => {
  const options = {
    method: "GET",
    url: `http://localhost:3000/api/blogs/${id}`
  };

  const { data } = await axios.request(options);

  return data;
};

export const searchBlogs = async (q) => {
  const options = {
    method: "GET",
    url: `http://localhost:3000/api/search`,
    params: {
      q
    }
  };

  const { data } = await axios.request(options);

  return data;
};

export const deleteBlog = (id) => {
  return axios.delete(`http://localhost:3000/api/blogs/${id}`);
};

export const createComments = async (newComment) => {
  const options = {
    method: "POST",
    url: `http://localhost:3000/api/blogs/${id}/comments`,
    body: newComment
  };

  const { data } = await request(options);
  return data;
};

// AUTH METHODS

export const registerUser = (formData) => {
  return axios.post(`http://localhost:3000/api/register`, formData);
};

export const loginUser = (formData) => {
  return axios.post(`http://localhost:3000/api/login`, formData);
};
