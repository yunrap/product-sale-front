import React from 'react';

interface CategoryCardProps {
  name: string;
  icon: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon,
  isActive = false,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        group relative flex flex-col items-center justify-center 
        w-full h-32 lg:h-36 
        border border-neutral-200 rounded-sm 
        cursor-pointer transition-all duration-200
        ${isActive 
          ? 'bg-red-500 text-white border-red-500' 
          : 'bg-white text-neutral-900 hover:bg-red-500 hover:text-white hover:border-red-500'
        }
      `}
      data-name={`${name} Category`}
    >
      {/* Icon */}
      <div className="text-3xl lg:text-4xl mb-2 lg:mb-3">
        {icon}
      </div>
      
      {/* Category Name */}
      <span className="font-poppins font-regular text-sm lg:text-base text-center px-2">
        {name}
      </span>
    </div>
  );
};

export default CategoryCard;