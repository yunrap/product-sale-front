import { Link, useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from 'utils/cookie';
import axiosInstance, { PROXY } from 'utils/apiConfig';
import mainLogo from '../../assets/main_logo.png';
import searchIcon from '../../assets/icon/search-btn.svg';
import mypageIcon from '../../assets/mypage.png';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!getCookie('accessToken');

  const handleLogout = async () => {
    try {
      await axiosInstance.post(`${PROXY}/api/user/logout`);
      removeCookie('accessToken');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header className="w-full border-b border-neutral-200" data-name="Header">
      {/* Main Header - Figma Design */}
      <div className="flex items-center justify-between w-full px-4 sm:px-8 lg:px-32 py-4 h-16 lg:h-20">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={mainLogo} 
              alt="Exclusive"
              className="h-6 sm:h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* Center - Navigation Menu (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            to="/" 
            className="font-poppins font-regular text-base text-neutral-900 hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-200"
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            className="font-poppins font-regular text-base text-neutral-900 hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-200"
          >
            Contact
          </Link>
          <Link 
            to="/about" 
            className="font-poppins font-regular text-base text-neutral-900 hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-200"
          >
            About
          </Link>
          {!isLoggedIn && (
            <Link 
              to="/register" 
              className="font-poppins font-regular text-base text-neutral-900 hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-200"
            >
              Sign Up
            </Link>
          )}
        </nav>

        {/* Right Side - Search and Icons */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Search Box - Hidden on mobile */}
          <div className="hidden sm:flex items-center relative">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="What are you looking for?"
              className="w-48 lg:w-60 h-10 py-2 pl-4 pr-12 bg-neutral-50 border-none rounded-sm outline-none font-poppins text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all duration-200"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <img
                src={searchIcon}
                alt="Search"
                className="w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Search Icon */}
            <button className="sm:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200">
              <img
                src={searchIcon}
                alt="Search"
                className="w-4 h-4"
              />
            </button>

            {/* Heart Icon */}
            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 1C3.239 1 1 3.216 1 5.95C1 11.157 10 18 10 18S19 11.157 19 5.95C19 3.216 16.761 1 14 1C12.12 1 10.5 1.948 10 3.298C9.5 1.948 7.88 1 6 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Cart Icon */}
            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.4 5.1 16.4H17M17 13V16.4M9 19.5C9.8 19.5 10.5 18.8 10.5 18S9.8 16.5 9 16.5 7.5 17.2 7.5 18 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 18.8 21.5 18S20.8 16.5 20 16.5 18.5 17.2 18.5 18 19.2 19.5 20 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* User Account */}
            {isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200"
              >
                <img
                  src={mypageIcon}
                  alt="Account"
                  className="w-5 h-5"
                />
              </button>
            ) : (
              <Link to="/loginPage" className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor"/>
                  <path d="M10 12C4.477 12 0 16.477 0 22H20C20 16.477 15.523 12 10 12Z" fill="currentColor"/>
                </svg>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
