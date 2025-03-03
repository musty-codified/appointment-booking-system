import React from 'react'

import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext.js'
import Loader from '../../components/Loader/Loader.js';
import FormCard from '../../components/card/FormCard.js'
import './AuthForm.css'

const RegisterForm = () => {
     const {registerConfig} = useAuth();
     const [registerFormData, setRegisterFormData] = useState({
        email: "", 
        password: ""
   })
   
   const [isLoading, setIsLoading]= useState(false)
   
   const handleChange =(event)=>{
       console.log(registerFormData)
       setRegisterFormData(prevRegisterFormData=>{
        return {
            ...prevRegisterFormData,
            [event.target.name] : event.target.value
        }
    })
}
  
   const handleSubmit = async (event)=>{
    event.preventDefault()
    setIsLoading(true)
    await registerConfig(registerFormData);
    setIsLoading(false)
    setRegisterFormData({
    email: "",
    password:""
    });
}

  return (
    <div className='auth-container'>
        <FormCard>
        <form className='auth-form' onSubmit={handleSubmit}>

        <h2>Register</h2>

        {/* <div className='mb-3'> */}
        <label>Username</label>
     <input 
          type="email" 
          placeholder="Email" 
          onChange={handleChange}
          name="email"
          value={registerFormData.email}
          required/>
         {/* </div> */}
        
        {/* <div className='mb-3'> */}
        <label>Password</label>
      <input 
           type="password" 
           placeholder="Password" 
           onChange={handleChange}
           name="password"
           value={registerFormData.password}
           required/>
      {/* </div> */}
       <button type="submit" className = "btn btn-primary "onClick = {()=>registerConfig(registerFormData)}>
             Register
         </button>

       <p>
       Already have an account?
       <a href='/login'> Login</a>
       </p>
        </form>
        </FormCard>
        {isLoading && <Loader/>}

        <ToastContainer />

    </div>
  )
}

export default RegisterForm;