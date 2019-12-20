import  React, {useRef } from "react";
import axios from 'axios';


const Login = (props) => {

  const usernameRef =useRef();
  const passwordRef = useRef();
  
  // const onLogin = ({ username, password }) => {
  //   return props.onLogin({ username, password });
  // };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const onSubmit = ()=>{
    axios.post('http://localhost:5000/api/login',{
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
    .then((res)=>{
      // SUCCESS! Credentials are valid:
      // 1 - The token string is then stored in local storage under a token key
      localStorage.setItem('token', res.data.payload)
      // Redirect users to the /colors route
      props.history.push('/colors')

    })

    .catch((error)=>{
      // This error messages comes up when the credentials are invalid.
      alert(error.message)

    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h3>Please Login</h3>
      <div>
      <form>
        <label>USERNAME</label>
        <input type="text" ref={usernameRef}/>
        <br/>
        <label>PASSWORD</label>
        <input  type="password" ref={passwordRef}/>
        <button onClick={onSubmit}>SUBMIT</button>
      </form>
      </div>
    </>
  );
};

export default Login;
