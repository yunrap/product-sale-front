import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import NavigationArrow from 'components/common/NavigationArrow';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
}

const FlashSalesSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  // Mock product data
  const products: Product[] = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviewCount: 88,
      image: require('../../assets/product.png')
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviewCount: 75,
      image: require('../../assets/product.png')
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      reviewCount: 99,
      image: require('../../assets/product.png')
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4,
      reviewCount: 99,
      image: require('../../assets/product.png')
    }
  ];

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-32 py-16" data-name="Flash Sales Section">
      {/* Section Header */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
          <span className="font-poppins font-semibold text-base text-red-500">Today's</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          {/* Title and Timer */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 lg:gap-16">
            <h2 className="font-inter font-semibold text-4xl text-neutral-900">
              Flash Sales
            </h2>
            
            {/* Countdown Timer */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="font-poppins font-medium text-xs text-neutral-900">Days</span>
                <span className="font-inter font-bold text-3xl text-neutral-900">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
              </div>
              <span className="font-inter font-bold text-3xl text-red-500 mb-2">:</span>
              
              <div className="flex flex-col items-center">
                <span className="font-poppins font-medium text-xs text-neutral-900">Hours</span>
                <span className="font-inter font-bold text-3xl text-neutral-900">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
              </div>
              <span className="font-inter font-bold text-3xl text-red-500 mb-2">:</span>
              
              <div className="flex flex-col items-center">
                <span className="font-poppins font-medium text-xs text-neutral-900">Minutes</span>
                <span className="font-inter font-bold text-3xl text-neutral-900">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
              </div>
              <span className="font-inter font-bold text-3xl text-red-500 mb-2">:</span>
              
              <div className="flex flex-col items-center">
                <span className="font-poppins font-medium text-xs text-neutral-900">Seconds</span>
                <span className="font-inter font-bold text-3xl text-neutral-900">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <NavigationArrow direction="left" />
            <NavigationArrow direction="right" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            {...product}
            onClick={(id) => console.log('Product clicked:', id)}
            onAddToCart={(id) => console.log('Add to cart:', id)}
            onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
            onQuickView={(id) => console.log('Quick view:', id)}
          />
        ))}
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center">
        <button className="bg-red-500 hover:bg-red-600 text-white font-poppins font-medium text-base px-12 py-4 rounded-sm transition-colors duration-200">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSalesSection;