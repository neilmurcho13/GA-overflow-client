export const setToken = (token) => {
  console.log("the token is ", token);
  window.localStorage.setItem("token", token);
};
