import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import kitchen from '../assets/kitchen.jpg';
import Shirt from '../assets/shirt.jpg';
import veg from '../assets/veg.jpg';
import { Link } from 'react-router-dom';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Converted your array to objects containing the image source, title, and description
  const slides = [
    {
      src: kitchen,
      title: "Modern Kitchen Designs",
      description: "Discover the perfect blend of functionality and style for your home culinary space.",
    },
    {
      src: Shirt,
      title: "Premium Apparel",
      description: "Upgrade your wardrobe with our latest collection of comfortable and sleek shirts.",
    },
    {
      src: veg,
      title: "Fresh & Organic Produce",
      description: "Handpicked, farm-fresh vegetables delivered straight to your doorstep daily.",
    },
    {
      src: kitchen, // Placeholder 4
      title: "Smart Kitchen Appliances",
      description: "Incorporate high-tech innovations into your daily cooking routine flawlessly.",
    },
    {
      src: Shirt, // Placeholder 5
      title: "Casual Summer Wear",
      description: "Stay cool and fashionable with breathable fabrics engineered for warm weather.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Bumped to 4 seconds so users have enough time to read the text

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>  
      {/* Navbar Container */}
      <div className="fixed w-full top-0 z-50"> 
        <Navbar />
      </div>

      {/* Main Slider Container */}
      <div className="relative w-full h-screen overflow-hidden bg-gray-900 pt-16">
        
        {/* Sliding Track */}
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            // Changed to 'relative' so the text overlay attaches perfectly to this specific slide
            <div key={index} className="relative w-full h-full shrink-0">
              
              {/* The Background Image */}
              <img 
                src={slide.src} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />

              {/* 2. Dark Overlay & Text Container */}
              {/* bg-black/40 creates a dark tint so white text is readable on any image background */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 text-white">
                
                {/* Text Animations trigger or change layout frame by frame */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4 max-w-2xl drop-shadow-md">
                  {slide.title}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl drop-shadow">
                  {slide.description}
                </p>

                {/* Optional Action Button */}
                <Link to ='/products'>
                <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200 transform hover:scale-105">
                  Explore More
                </button></Link>

              </div>

            </div>
          ))}
        </div>

        {/* Navigation Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "w-8 bg-white" : "w-3 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
      <div>
          last div  
      </div>
    </>
  );
}

export default Home;