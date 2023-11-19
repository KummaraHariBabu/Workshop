import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserHome = () => {
  console.log("called UserHome")
  let navigate=useNavigate()
  let logout=()=>{
    localStorage.removeItem("user")
    navigate("/")

  }
  return (
    <div>
      <Link to="/viewuser"><h2>View Profile</h2></Link>
      <Link to="/updateuser"><h2>Edit Profile</h2></Link>
      <Link to="/deleteuser"><h2>Delete Profile</h2></Link>
      <Link to="/addproduct"><h2>Add Product</h2></Link>
      <Link to="/viewproducts"><h2>View Products</h2></Link>
      <button onClick={logout}>Logout</button>
     </div>

  )
}

export default UserHome

