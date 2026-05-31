import React from 'react';
import { Link } from 'react-router-dom';

function Usermenu({ onClose }) {
  return (
    <div className="absolute right-0 top-full mt-2 w-64 p-4 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 z-50">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
        User Menu
      </h2>
      <ul className="space-y-2 text-base font-normal">
        <li>
          <Link 
            to="/profile" 
            onClick={onClose} 
            className="block py-1.5 px-2 rounded hover:bg-gray-100 transition"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link 
            to="/settings" 
            onClick={onClose} 
            className="block py-1.5 px-2 rounded hover:bg-gray-100 transition"
          >
            Settings
          </Link>
        </li>
        <hr className="border-gray-200 my-1" />
        <li>
          <Link 
            to="/logout" 
            onClick={onClose} 
            className="block py-1.5 px-2 rounded text-red-600 hover:bg-red-50 transition"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Usermenu;