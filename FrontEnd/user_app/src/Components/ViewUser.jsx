import React from 'react'

const ViewUser = () => {
    let user=JSON.parse( localStorage.getItem("user"))
    return (
    <div>
        <h2>Name : {user.name}</h2>
        <h2>Id : {user.id}</h2>
        <h2>Phone : {user.phone}</h2>
        <h2>Email : {user.email}</h2>
    </div>
  )
}

export default ViewUser