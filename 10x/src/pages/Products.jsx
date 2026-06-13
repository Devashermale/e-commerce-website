import Navbar from '../components/navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Products() {
  const [products, setProducts] = useState([]);

  const BACKEND_URL = 'http://localhost:8080';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/products/list`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
 
  return (
    <div>
      <Navbar />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4" > 
        {products.map((product) => (
          <li 
            key={product._id} 
            className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col gap-4"
          >
            <div className="flex justify-center">
              <img 
                src={`${BACKEND_URL}/${product.image}`} 
                alt={product.name} 
                className="w-48 h-48 object-cover rounded-md" 
                onError={(e) => {
                  console.log("Failed image source attempt:", e.target.src);
                }}
              />
            </div>
            <div className="grid gap-2 grow">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-base font-bold text-gray-900 mt-auto">Price: ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;