import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UpdateProfile = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    let [name,setName] = useState(user.name)
    let [email,setEmail]=useState(user.email)
    let [phone,setPhone]=useState(user.phone)
    let [password,setPassword]=useState(user.password)
    let [id,setId] = useState(user.id)
    let navigate = useNavigate()
 
    let updateData = (e)=>{
        e.preventDefault()
        let user={id,name,password,email,phone}
        axios.put(`http://localhost:8080/users`,user)
        .then((response)=> {
             alert("user is saved with id :"+response.data.data.id)
            localStorage.setItem("user",JSON.stringify(response.data.data))
            navigate("/viewuser")    

        })

    }
   return (
    <div>
        <form>
             <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='enter the name'/><br />
             <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='enter the email'/><br />
             <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='enter the phone number' /><br />
             <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='enter the password' /><br />
            <button onClick={updateData}>Update</button>

        </form>
    </div>
  )
}

export default UpdateProfile