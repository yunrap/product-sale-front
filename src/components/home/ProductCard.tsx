import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
  onClick?: (id: number) => void;
  onAddToCart?: (id: number) => void;
  onAddToWishlist?: (id: number) => void;
  onQuickView?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  image,
  isNew = false,
  onClick,
  onAddToCart,
  onAddToWishlist,
  onQuickView
}) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToWishlist) {
      onAddToWishlist(id);
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(id);
    }
  };
  return (
    <div 
      className="group relative bg-white rounded-sm overflow-hidden cursor-pointer" 
      data-name="Product Card"
      onClick={handleCardClick}
    >
      {/* Product Image Container */}
      <div className="relative bg-neutral-100 aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-sm text-xs font-poppins font-regular">
            -{discount}%
          </div>
        )}

        {/* New Badge */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-sm text-xs font-poppins font-regular">
            NEW
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Heart Icon */}
          <button 
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors shadow-sm"
            onClick={handleAddToWishlist}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4.85 1C2.72375 1 1 2.71573 1 4.83035C1 8.09121 8 14 8 14S15 8.09121 15 4.83035C15 2.71573 13.2762 1 11.15 1C9.848 1 8.774 1.71255 8 2.77183C7.226 1.71255 6.152 1 4.85 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Eye Icon */}
          <button 
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors shadow-sm"
            onClick={handleQuickView}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8C1 8 3.63636 3 8 3C12.3636 3 15 8 15 8C15 8 12.3636 13 8 13C3.63636 13 1 8 1 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Add to Cart Button */}
        <button 
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm font-poppins font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-full group-hover:translate-y-0"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-poppins font-medium text-base text-neutral-900 mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-poppins font-medium text-base text-red-500">
            ${price}
          </span>
          {originalPrice && (
            <span className="font-poppins font-medium text-base text-neutral-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`${
                  index < Math.floor(rating) ? 'text-yellow-400' : 'text-neutral-300'
                }`}
              >
                <path
                  d="M8 1L9.545 6.13L15 6.13L10.727 9.27L12.273 14.4L8 11.27L3.727 14.4L5.273 9.27L1 6.13L6.455 6.13L8 1Z"
                  fill="currentColor"
                />
              </svg>
            ))}
          </div>
          <span className="font-poppins font-regular text-sm text-neutral-600">
            ({reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;