import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    let [name,setName] =useState("")
    let [brand,setBrand] = useState("")
    let [category,setCategory] =useState("")
    let [description,setDescription] = useState("")
    let [cost,setCost] =useState("")
    let [image,setImage] = useState("")

    let navigate = useNavigate()

    let Add =(e)=> {
        let user = JSON.parse(localStorage.getItem("user"))
        e.preventDefault()
        let product = {name,brand,description,category,cost,image}
        axios.post(`http://localhost:8080/products/${user.id}`,product).then((response)=>{
            localStorage.setItem("products",JSON.stringify(response.data.data))
            alert("product added with id : " +response.data.data.id)
            navigate("/userhome")
        }).catch(()=>{
            alert("something went wrong")
        })
    }

  return (
    <div> 
        <form>
            Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br /><br />
            Brand : <input type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}} /> <br /><br />
            Category : <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} /> <br /><br />
            Description : <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} /> <br /><br />
            Cost : <input type="number" value={cost} onChange={(e)=>{setCost(e.target.value)}} /> <br /><br />
            Image : <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} /> <br /><br />
            <button onClick={Add}>Add Product</button>

        </form>
    </div>
  )
}

export default AddProduct