import React from 'react';
import NavigationArrow from 'components/common/NavigationArrow';
import CategoryCard from './CategoryCard';

const CategorySection: React.FC = () => {
  const categories = [
    {
      name: "Phones",
      icon: "📱",
      isActive: false
    },
    {
      name: "Computers",
      icon: "💻",
      isActive: false
    },
    {
      name: "SmartWatch",
      icon: "⌚",
      isActive: false
    },
    {
      name: "Camera",
      icon: "📷",
      isActive: true
    },
    {
      name: "HeadPhones",
      icon: "🎧",
      isActive: false
    },
    {
      name: "Gaming",
      icon: "🎮",
      isActive: false
    }
  ];

  const handleCategoryClick = (categoryName: string) => {
    console.log('Category clicked:', categoryName);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-32 py-16" data-name="Category Section">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
            <span className="font-poppins font-semibold text-base text-red-500">Categories</span>
          </div>
          <h2 className="font-inter font-semibold text-4xl text-neutral-900">
            Browse By Category
          </h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <NavigationArrow direction="left" />
          <NavigationArrow direction="right" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            name={category.name}
            icon={category.icon}
            isActive={category.isActive}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </div>

    </div>
  );
};

export default CategorySection;