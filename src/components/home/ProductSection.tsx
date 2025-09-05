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

interface ProductSectionProps {
  label: string;
  productList?: any[]; // Keep for compatibility but won't use
}

const ProductSection = ({ label }: ProductSectionProps) => {
  // Mock data for each section
  const getMockProducts = (sectionLabel: string): Product[] => {
    if (sectionLabel === "Women's Fashion") {
      return [
        {
          id: 1,
          name: "Women's Floral Dress",
          price: 89,
          originalPrice: 120,
          discount: 25,
          rating: 5,
          reviewCount: 124,
          image: require('../../assets/product.png')
        },
        {
          id: 2,
          name: "Designer Handbag",
          price: 299,
          originalPrice: 399,
          discount: 25,
          rating: 4,
          reviewCount: 89,
          image: require('../../assets/product.png')
        },
        {
          id: 3,
          name: "Elegant High Heels",
          price: 159,
          originalPrice: 199,
          discount: 20,
          rating: 4,
          reviewCount: 67,
          image: require('../../assets/product.png')
        },
        {
          id: 4,
          name: "Silk Scarf Collection",
          price: 45,
          originalPrice: 65,
          discount: 30,
          rating: 5,
          reviewCount: 156,
          image: require('../../assets/product.png')
        }
      ];
    } else {
      return [
        {
          id: 5,
          name: "Men's Classic Suit",
          price: 299,
          originalPrice: 450,
          discount: 33,
          rating: 5,
          reviewCount: 201,
          image: require('../../assets/product.png')
        },
        {
          id: 6,
          name: "Leather Business Shoes",
          price: 189,
          originalPrice: 249,
          discount: 24,
          rating: 4,
          reviewCount: 143,
          image: require('../../assets/product.png')
        },
        {
          id: 7,
          name: "Casual Sports Watch",
          price: 129,
          originalPrice: 179,
          discount: 28,
          rating: 4,
          reviewCount: 92,
          image: require('../../assets/product.png')
        },
        {
          id: 8,
          name: "Premium Wallet Set",
          price: 79,
          originalPrice: 110,
          discount: 28,
          rating: 5,
          reviewCount: 78,
          image: require('../../assets/product.png')
        }
      ];
    }
  };

  const products = getMockProducts(label);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-32 py-16" data-name={`${label} Section`}>
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
            <span className="font-poppins font-semibold text-base text-red-500">
              {label}
            </span>
          </div>
          <h2 className="font-inter font-semibold text-4xl text-neutral-900">
            {label} Collection
          </h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <NavigationArrow direction="left" />
          <NavigationArrow direction="right" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
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

export default ProductSection;
