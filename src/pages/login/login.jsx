import axios from "axios";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {

const navigate = useNavigate()

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


	const loginFunction = (e) => {
		e.preventDefault()

		let obj = {
			email: email,
			password: password
		}

		axios.post("http://localhost:8080/login", obj).then((res) => {
			localStorage.setItem("user", JSON.stringify(res.data.data))
			
      navigate('/Home')

		}).catch((err) => { alert(err.response.data.message) })
	}




  return (
    // <div className="login">
    //   <div className="lContainer">
    //   <input type="text"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //   <input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     <button  onClick={loginFunction} className="lButton">
    //       Login
    //     </button>
      
    //     <p>
    //         Don't have an account? <a id='register' href='/register'>Sign Up</a>
    //       </p>
    //   </div>
    // </div>
    <div className="formContainer1">
    <div className="formWrapper1">
      <span className="logo">WanderStay</span>
      <span className="title1">Login</span>
      <form onSubmit={loginFunction}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign in</button>
       
      </form>
      <p>You don't have an account? <a id='register' href='/register'>Sign Up</a></p>
    </div>
  </div>
  );
};

export default Login;