import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api/callerFunctions";

function Login() {
  const history = useHistory();
  const [state, setState] = useState({
    formData: {
      email: "",
      password: ""
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(state.formData);
      if (res.status === 200) {
        setToken(res.data.token);
        history.push("/");
      }
    } catch (err) {
      console.error("error logging in user", err);
    }
  };

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    };

    setState({ formData });
  };

  return (
    <section className="main-content">
      <div>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label>email: </label>
              <div className="user-input">
                <input
                  name="email"
                  value={state.formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label>password: </label>
              <div className="user-input">
                <input
                  name="password"
                  type="password"
                  value={state.formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="login-btn">
              <button type="submit">login</button>
              <i class="fa fa-sign-in"></i>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
