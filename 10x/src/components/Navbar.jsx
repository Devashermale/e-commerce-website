import { Link } from 'react-router-dom';
import { CircleUserRound, ShoppingCart } from 'lucide-react'; 
import { useState } from 'react';
import ShoppingCartModal from './Shopingcart'; 
import UserMenu from './Usermenu'; 

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsUserMenuOpen(false); 
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsCartOpen(false); 
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white relative"> 
      {/* Brand Logo */}
      <div className="text-2xl font-bold">
        <h1>swiftsmart10x</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-300 transition">home</Link></li>
        <li><Link to="/products" className="hover:text-gray-300 transition">products</Link></li>
        <li><Link to="/deals" className="hover:text-gray-300 transition">deals</Link></li>
        <li><Link to="/orders" className="hover:text-gray-300 transition">orders</Link></li>
      </ul>

      {/* Search and Actions */}
      <div className="text-lg font-bold flex items-center space-x-4">
        <input 
          type="search" 
          placeholder="search for products" 
          className="px-2 bg-white text-gray-800 placeholder:text-gray-500 py-1 rounded text-base font-normal" 
        />
        
        {/* Shopping Cart Container */}
        <div className="relative">
          <button onClick={toggleCart} className="focus:outline-none flex items-center hover:text-gray-300 transition">
            <ShoppingCart />
          </button>
          {/* Render cart dropdown relative to the button if it's designed as a dropdown */}
          {isCartOpen && <ShoppingCartModal onClose={toggleCart} />}
        </div>
        
        {/* User Menu Container */}
        <div className="relative">
          <button onClick={toggleUserMenu} className="focus:outline-none flex items-center hover:text-gray-300 transition">
            <CircleUserRound />
          </button>
          {/* Render user menu relative to the button */}
          {isUserMenuOpen && <UserMenu onClose={toggleUserMenu} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;