import axios from 'axios';

export const getAllBlogs = async () => {
  const options = {
    method: 'GET',
    url: `http://localhost:3000/api/blogs`,
  };

  const { data } = await axios.request(options);

  console.log(data);
  return data;
};

export const createBlog = (formData) => {
  console.log('Neil CallerFunction works');
  return axios.post(`http://localhost:3000/api/blogs`, formData);
};
