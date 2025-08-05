// import React from 'react'

// function Projects() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Projects


import React, { useEffect, useState } from 'react';

function Projects() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('priceAsc');
  const [categories, setCategories] = useState(['All', 'Electronics', 'Clothing', 'Jewelry']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const countUp = () => setCount(prev => prev * 2);
  const countDown = () => setCount(prev => prev / 2);

  const handleAddToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setIsCheckoutVisible(true);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const filteredData = data
    .filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOption === 'priceAsc') return a.price - b.price;
      if (sortOption === 'priceDesc') return b.price - a.price;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-yellow-500 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-xl">MyStore</span>
          <input
            type="text"
            placeholder="Search for products"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-lg w-96 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>
        <div className="relative cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M5 12h14M7 19h10" />
          </svg>
          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cart.length}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 bg-white shadow-md flex justify-between items-center">
        <select onChange={handleCategoryChange} value={selectedCategory} className="px-4 py-2 rounded-lg w-40 bg-gray-200 text-gray-800">
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <select onChange={handleSortChange} value={sortOption} className="px-4 py-2 rounded-lg w-40 bg-gray-200 text-gray-800">
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="nameAsc">Name: A to Z</option>
          <option value="nameDesc">Name: Z to A</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <img src={item.image} alt={item.title} className="h-48 w-full object-contain rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description.slice(0, 80)}...</p>
                <p className="text-xl font-bold text-green-600 mt-2">${item.price}</p>
                <button onClick={() => handleAddToCart(item)} className="w-full mt-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Add to Cart</button>
                <button onClick={() => handleAddToCart(item)} className="w-full mt-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Buy Now</button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">No products found.</div>
        )}
      </div>

      {/* Cart */}
      {cart.length > 0 && (
        <div className="fixed top-20 right-10 bg-white p-4 shadow-xl w-80 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">🛒 Your Cart</h2>
          <ul className="space-y-2 text-sm">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.title}</span>
                <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold text-xl">Total: ${calculateTotal()}</div>
          <button onClick={handleCheckout} className="w-full py-2 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600">Proceed to Checkout</button>
        </div>
      )}

      {/* Checkout */}
      {isCheckoutVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <p className="text-xl mb-4">Total: ${calculateTotal()}</p>
            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Select Payment Method</label>
              <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange} className="px-4 py-2 w-full bg-gray-200 text-gray-800 rounded-md">
                <option value="">Select a method</option>
                <option value="cash">Cash on Delivery</option>
                <option value="upi">UPI</option>
              </select>
            </div>

            {paymentMethod === 'upi' && (
              <div className="mb-4 text-center">
                <p className="text-sm text-gray-700 mb-2">Scan this QR to pay</p>
                <img src="/sai.jpg" alt="UPI QR Code" className="mx-auto w-48 h-48 object-contain border border-gray-300 p-2 rounded-md" />
              </div>
            )}

            <button onClick={() => alert(`Payment via ${paymentMethod} successful!⁠`)} className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Complete Purchase</button>
            <button onClick={() => setIsCheckoutVisible(false)} className="w-full py-2 mt-2 bg-gray-300 text-black rounded-md hover:bg-gray-400">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;