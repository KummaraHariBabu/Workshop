import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
    let products = JSON.parse(localStorage.getItem("products"))
     let [id,setId] = useState(products.id) 
     let [name,setName] = useState(products.name)
     let [brand,setBrand] = useState(products.brand)
     let [category,setCategory] = useState(products.category)
     let [description,setDescription] = useState(products.description)
     let [cost,setCost] = useState(products.cost)
     let [image,setImage] = useState(products.image)
     let navigate = useNavigate()


     let edit = (e)=>{
        e.preventDefault()
        let user = JSON.parse(localStorage.getItem("user"))
        let product = {id,name,brand,category,description,cost,image}
        axios.put(`http://localhost:8080/products/${user.id}`,product)
         .then((res)=>{
            alert('product is updated with id '+res.data.data.id)
            localStorage.setItem("products",JSON.stringify(res.data.data))
            navigate("/viewproducts")
        })
        .catch((err)=>{
            alert(err)
            navigate("/userhome")
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
            <button onClick={edit}>Update Product</button>

        </form>
    </div>
  )
}

export default EditProduct