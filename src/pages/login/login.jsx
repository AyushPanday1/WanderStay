
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {

const navigate = useNavigate()


	const loginFunction = (e) => {
		
			
      navigate('/Home')
      alert("Logged in succesfully")

	}




  return (
   
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