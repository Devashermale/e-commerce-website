import React from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { useEffect } from 'react';
function Deals() {
  const [deals, setDeals] = React.useState([]);
const BACKEND_URL = 'http://localhost:8080';
  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;

  };
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/products/list`);
        const shuffledDeals = shuffleArray(response.data);
        setDeals(shuffledDeals.slice(0, 5)); // Display only the top 5 shuffled deals
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };
    fetchDeals();
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-gray-800 p-4">Special Deals</h1>
      {
        deals.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {deals.map((deal) => (
              <li
                key={deal._id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col gap-4"
              >
                <div className="flex justify-center">
                  <img
                    src={`${BACKEND_URL}/${deal.image}`}
                    alt={deal.name}
                    className="w-48 h-48 object-cover rounded-md"
                    onError={(e) => {
                      console.log("Failed image source attempt:", e.target.src);
                    }
                  }
                  />
                </div>
                <div className="grid gap-2 grow">
                  <h3 className="text-lg font-semibold text-gray-800">{deal.name}</h3>
                  <p className="text-sm text-gray-600">{deal.description}</p>
                  <p className="text-base font-bold text-gray-900 mt-auto">Price: ${deal.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 p-4">No deals available at the moment. Please check back later!</p>
        )

      }
    </div>
  )
}

export default Deals