import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteAccount = () => {
  let [password,setPassword] = useState("")
  let navigate=useNavigate()
  let deleteAccount=()=>{
    let user = JSON.parse(localStorage.getItem("user"))
    if(password===user.password) {
      let user = JSON.parse(localStorage.getItem("user"))
      axios.delete(`http://localhost:8080/users/${user.id}`).then(()=>{
        localStorage.removeItem("user")
        alert("user deleted successfully")
        navigate("/")
      }).catch(()=>{
        alert("something went wrong")
      })
    }
    else {
      alert("invalid password")
      navigate("/userhome")
    }

   }
  return (
    <div> 
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='confirm your password' /><br />
      <button onClick={deleteAccount}>Delete</button>
    </div>
  )
}

export default DeleteAccount