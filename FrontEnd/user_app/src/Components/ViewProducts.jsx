import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ViewProducts = () => {
    let [products,setProducts] = useState([])
    let user = JSON.parse(localStorage.getItem("user"))
    let navigate = useNavigate()

    let editProduct = (id)=>{
        axios.get(`http://localhost:8080/products/${id}`).then((response)=>{
            localStorage.setItem("products",JSON.stringify(response.data.data))
            navigate("/editproduct")
        }).catch(()=>{
            alert("something went wrong!")
        })
    }

    let deleteproduct =((id)=>{
        axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
            alert(res.data.message)
        }).catch((err)=>{
            alert(err)
        })
    })
    useEffect(()=>{
        let fetchData=()=>{
            axios.get(`http://localhost:8080/products/byuser-id/${user.id}`)
            .then((response)=>{
                setProducts(response.data.data)
            })
            .catch(()=>{
                alert("not a good request")
            })
        }
        fetchData()
    },[])
  return (
    <div>
        <table border={2}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Image url</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            
                {
                    products.map((p)=>{
                        return(
                           <tr>
                              <td>{p.id}</td>
                              <td>{p.name}</td>
                              <td>{p.brand}</td>
                              <td>{p.category}</td>
                              <td>{p.description}</td>
                              <td>{p.cost}</td>
                              <td>{p.image}</td>
                              <td><button onClick={()=>{editProduct(p.id)}}>edit</button></td> 
                              <td><button onClick={()=>{deleteproduct(p.id)}}>delete</button></td>                           
                          
                           </tr>
                        )
                    })
                 }
            
        </table>
    </div>
  )
}

export default ViewProducts