import { React, useState } from "react";
import { Formik, Form, Field } from "formik";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: ""
  });
  // const onLogin = ({ username, password }) => {
  //   return props.onLogin({ username, password });
  // };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  handleChange = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
      <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={loginForm.username}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={loginForm.password}
        />
        <br/>
        <input type="submit"/>
      </form>
      </div>
    </>
  );
};

export default Login;
