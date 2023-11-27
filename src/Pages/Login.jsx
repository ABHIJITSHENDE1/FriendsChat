import React,{useState} from 'react'
import Add from '../img/addAvatar.png'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Abhijeet Shende</span>
        <span className='title'>Login</span>
        <form action="" onSubmit={handleSubmit}>
           
            <input type="email" name="" id="" placeholder='Enter Your Email'/>
            <input type="password" name="" id="" placeholder='Enter Your Password'/>
            
            <button>Sign in</button>
            {err && <span>Something went Wrong</span>}
        </form>
        <p>You do have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login
