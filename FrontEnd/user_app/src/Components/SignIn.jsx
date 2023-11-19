

import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SignIn = () => {
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let navigate = useNavigate()
  let onclick=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/users/verifyByemail?email=${email}&password=${password}`)
    .then((response)=> {
      localStorage.setItem("user",JSON.stringify(response.data.data))
      console.log(response.data.message)
      navigate("/userhome")
    }).catch(()=>{
      alert("invalid email or password")
      navigate("/")
    })
  }
  let signup=(e)=>{
    e.preventDefault()
    navigate("/signup")
  }
  return (
    <div>
      <form action="">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter the email'/><br></br>
        <input type="Password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter the password'/><br></br>
        <button onClick={onclick}>SignIn</button>
        <button onClick={signup}>SignUp</button>
      </form>
    </div>
  )
}

export default SignIn
