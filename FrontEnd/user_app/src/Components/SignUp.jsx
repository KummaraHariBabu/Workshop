import axios from 'axios'
import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
 
const SignUp = () => {
    let [name,setName] = useState("")
    let [email,setEmail]=useState("")
    let [phone,setPhone]=useState("")
    let [password,setPassword]=useState("")
    let navigate = useNavigate()
 
    let postData = (e)=>{
        let user={name,password,email,phone}
        axios.post(`http://localhost:8080/users`,user)
        .then((response)=> {
             alert("user is saved with id :"+response.data.data.id)
            localStorage.setItem("user",JSON.stringify(response.data.data))
        })
        navigate("/userhome")



    }
   return (
    <div>
        <form onSubmit={postData}>
            Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='enter the name'/><br />
            Email : <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='enter the email'/><br />
            Phone : <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='enter the phone number' /><br />
            Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='enter the password' /><br />
            <button>Register</button>

        </form>
    </div>
  )
}

export default SignUp