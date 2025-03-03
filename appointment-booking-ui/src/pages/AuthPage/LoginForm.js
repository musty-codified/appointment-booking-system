import React, {useState} from 'react'
import { useAuth } from '../../context/AuthContext'

import { useNavigate, useLocation} from "react-router-dom";
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import FormCard from '../../components/card/FormCard';
import Loader from '../../components/Loader/Loader';
import './AuthForm.css'

const LoginForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {loginConfig} = useAuth()


  const [loginFormData, setLoginFormData] = useState(
  {
    email:"",
    password:""

  })
  const [isLoading, setIsLoading] = useState(false);

     const handleChange=(event)=>{
       console.log(loginFormData)
       setLoginFormData(prevLoginForm=>{
          return{
          ...prevLoginForm,
         [event.target.name]: event.target.value
        }
      })

  }
       
       const handleSubmit= async(event)=>{
       event.preventDefault()
       setIsLoading(true)
       console.log(location)
       await loginConfig(loginFormData, location, navigate)
       setIsLoading(false)
       setLoginFormData({
                email:"",
                password:""
    })

  }
          const showMessage = location.state?.message;
          console.log(showMessage) 

     return (
          <div className="auth-container">
           <FormCard>

              <form className='auth-form' onSubmit={handleSubmit}>
               <h2 >Log in to your account</h2>
                  {showMessage && <h4 className='red'>{showMessage}</h4>}
              
                      <input 
                           type="email" 
                           placeholder="Email address" 
                           name="email"
                           onChange={handleChange}
                           value={loginFormData.email}
                           required/>
   
                      <input 
                          type="password" 
                          placeholder="Password" 
                          name="password"
                          onChange={handleChange}
                          value={loginFormData.password}
                          required/>

                      <button 
                      type="submit" 
                      onClick = {()=>loginConfig(loginFormData, location, navigate)} className="login-btn"
                      >
                          Log in
                      </button>
                       
                       <p className='login_small mb-0'>
                       Don't have an account? 
                       <a href='/register'> Register</a>
                       </p>
                       </form>
                   {isLoading && <Loader/>}
                 </FormCard>
               <ToastContainer />
                   </div>
           )
   }
   
   export default LoginForm