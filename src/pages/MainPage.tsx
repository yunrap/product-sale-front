import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import styles from './MainPage.module.css';
import ProductSection from 'components/home/ProductSection';
import CategorySection from 'components/home/CategorySection';
import FlashSalesSection from 'components/home/FlashSalesSection';
import { useEffect, useState } from 'react';
import { productApi } from 'api';
import { ProductListProps } from 'types/ResultDataType';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TopHeader from 'components/common/TopHeader';

const banners = [
  { 
    src: require('../assets/banner.jpg'), 
    alt: 'One Day Special Discount',
    title: 'FLASH SALE',
    subtitle: 'Up to 70% Off Today Only',
    buttonText: 'Shop Now'
  },
  { 
    src: require('../assets/banner1.jpg'), 
    alt: 'Vitamin Brand Day',
    title: 'HEALTH & WELLNESS',
    subtitle: 'Premium Supplements Collection',
    buttonText: 'Discover More'
  },
  { 
    src: require('../assets/banner3.jpg'), 
    alt: 'Premium Rice Products',
    title: 'ORGANIC FOODS',
    subtitle: 'Fresh & Natural Products',
    buttonText: 'Order Now'
  },
];

const MainPage = () => {
  const [productList, setProductList] = useState<ProductListProps[]>([]);

  const getLoadData = async () => {
    const param = {
      take: 6,
    };

    try {
      const data = await productApi(param);
      setProductList(data);
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  };

  useEffect(() => {
    getLoadData();
  }, []);

  return (
    <>
    <TopHeader />
      <Header></Header>
      <div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper h-80 lg:h-96"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative w-full h-full">
                <img 
                  src={banner.src} 
                  alt={banner.alt} 
                  className="w-full h-full object-cover"
                />
                {/* English Text Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h2 className="font-inter font-bold text-3xl lg:text-5xl mb-4">
                      {banner.title}
                    </h2>
                    <p className="font-poppins font-medium text-lg lg:text-2xl mb-6">
                      {banner.subtitle}
                    </p>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-poppins font-medium text-base px-8 py-3 rounded-sm transition-colors duration-200">
                      {banner.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Category Section */}
      <CategorySection />
      
      {/* Flash Sales Section */}
      <FlashSalesSection />
      
      <div className={`${styles['main-container']}`}>
        <ProductSection label="Women's Fashion" productList={productList} />
        <ProductSection label="Men's Fashion" productList={productList} />
      </div>
      
      <Footer />
    </>
  );
};

export default MainPage;
