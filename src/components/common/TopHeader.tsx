import React, { useState } from 'react';
import dropdownIcon from '../../assets/images/dropdown-arrow.svg';

const TopHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-black relative w-full min-h-12" data-name="Top Header">
      <div className="flex items-center justify-between w-full px-4 sm:px-8 lg:px-32 py-2 sm:py-3 min-h-12">
        {/* Promotion Message */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white flex-1 mr-4">
          <p className="font-poppins font-regular leading-tight">
            <span className="hidden lg:inline text-white">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <span className="hidden sm:inline lg:hidden truncate text-white">Summer Sale For All Swim Suits - OFF 50%!</span>
            <span className="sm:hidden truncate text-white">Summer Sale - OFF 50%!</span>
          </p>
          <button 
            className="font-poppins font-semibold text-xs sm:text-sm underline hover:opacity-80 transition-opacity duration-200 ease-in-out whitespace-nowrap ml-1 sm:ml-2"
            onClick={() => {
              // TODO: 쇼핑 페이지로 이동 로직 추가
              console.log('ShopNow clicked');
            }}
          >
            ShopNow
          </button>
        </div>

        {/* Language Selector & Close Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Selector - 모바일에서는 숨김 */}
          <div className="hidden sm:flex items-center gap-1">
            <span className="font-poppins font-regular text-sm text-white">
              English
            </span>
            <div 
              className="w-6 h-6 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => {
                // TODO: 언어 선택 드롭다운 로직 추가
                console.log('Language selector clicked');
              }}
            >
              <img 
                src={dropdownIcon} 
                alt="dropdown" 
                className="w-2 h-3 rotate-90"
              />
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="text-white hover:opacity-80 transition-opacity duration-200 p-1"
            aria-label="Close promotion banner"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;