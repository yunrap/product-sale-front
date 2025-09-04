import Header from 'components/layout/Header';
import styles from './MainPage.module.css';
import ProductSection from 'components/home/ProductSection';
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
  { src: require('../assets/banner.jpg'), alt: '오늘단하루 할인' },
  { src: require('../assets/banner1.jpg'), alt: '비타민 브렌드데이' },
  { src: require('../assets/banner3.jpg'), alt: '양반밥' },
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
      console.error('데이터 로드가 실패했습니다:', error);
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
          className="mySwiper"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img src={banner.src} alt={banner.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`${styles['main-container']}`}>
        <div>
          <h2 className={`${styles.label}`}>
            HOT! TREND
            <br />
            카테고리별
            <span className={`${styles['text-blue']}`}> 추천 광고상품</span>
          </h2>
        </div>
        <ProductSection label="여성패션" productList={productList} />
        <ProductSection label="남성패션" productList={productList} />
      </div>
    </>
  );
};

export default MainPage;
