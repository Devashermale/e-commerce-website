
function ShoppingCart({ onClose }) {
  return (
    <div className="absolute right-0 top-full mt-2 w-72 p-4 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 z-50">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Shopping Cart
        </h2>
        {/* Optional close button for a better user experience */}
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-gray-600 text-sm focus:outline-none"
        >
          ✕
        </button>
      </div>
      
      <div className="py-6 text-center text-gray-500 font-normal text-base">
        <p>Your shopping cart is empty.</p>
      </div>
      
      {/* Placeholder for future checkout button */}
      <button 
        disabled
        className="w-full mt-2 bg-gray-300 text-gray-600 font-medium py-2 px-4 rounded cursor-not-allowed text-sm"
      >
        Checkout
      </button>
    </div>
  )
}

export default ShoppingCart