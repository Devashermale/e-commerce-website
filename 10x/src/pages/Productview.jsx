import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'

function Productview() {
    const [data, setdata] =useState([])

    const BACKEND_URL = 'http://localhost:8080';
    useEffect(()=>{
    const handlethings = async () => {  
    try {
const res = await axios.get(`${BACKEND_URL}/products/list`);
     setdata(res.data)
    } catch (error) {
        console.log(error.message)
    }
    }
    handlethings()
},[])
  return (
    <div>
        {data.map((product)=>(
            <div className=' grid grid-cols-2 '> 
                <div className=' size-120 m-4 '>
                    <img src={`${BACKEND_URL}/${product.image}`} className="w-full h-full object-cover"
                     alt={product.name} />
                </div>
                <div className=' size-120 m-4'>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <li>{product.price}₹</li>

                </div>
            </div>
           
        ))}
    </div>
  )
}

export default Productview