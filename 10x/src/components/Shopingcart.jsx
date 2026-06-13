import axios from "axios";
import { useEffect, useState } from "react";

function ShoppingCart({ onClose }) {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get('http://localhost:8080/cart/get');
        setCart(res.data);
        console.log(res.data);
      } catch (err) {
        // Store just the message string
        setError(err.message || "Something went wrong"); 
      }
    };
    fetchCart();
  }, []);

  if (error) {
    return <p className="text-red-500 p-4">Error: {error}</p>; 
  }

  return (
    <div className="absolute right-0 top-full mt-2 w-72 p-4 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 z-50">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Shopping Cart
        </h2>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-gray-600 text-sm focus:outline-none"
        >
          ✕
        </button>
      </div>
      
      <div className="py-4 text-left text-gray-500 font-normal text-base">
        {cart.length === 0 ? (
          <p className="text-center py-2">Your cart is empty</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((product) => (
              <li key={product._id} className="border-b pb-1 last:border-none">
                {product[2].name} 
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <button 
        disabled
        className="w-full mt-2 bg-gray-300 text-gray-600 font-medium py-2 px-4 rounded cursor-not-allowed text-sm"
      >
        Checkout
      </button>
    </div>
  );
}

export default ShoppingCart;