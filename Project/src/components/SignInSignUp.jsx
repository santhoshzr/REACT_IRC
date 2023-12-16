import React,{ useState }from 'react'
import './SignInSignUp.css'
import username_icon from '../assets/images/person.png';
import email_icon from '../assets/images/email.png';
import pass_icon from '../assets/images/password.png';
const SignInSignUp = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className="container">
        <div className="header">
            <div className="text">
                {action}
            </div>
           <center>  <div className="underline"></div></center> 
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={username_icon} alt="" />
                <input type="text" placeholder='Username'className="input"/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' className="input"/>
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" placeholder='Password' className="input"/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgotpass">Lost Password?  <span>Click here!</span></div>}
        
        <div className="submit_container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

    </div>
  )
}

export default SignInSignUp
