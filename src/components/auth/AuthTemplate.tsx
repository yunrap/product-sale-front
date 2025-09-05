import TopHeader from 'components/common/TopHeader';
import Header from 'components/layout/Header';

/**
 * 회원가입/로그인 페이지의 레이아웃
 */

const AuthTemplate = ({ children }: any) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Headers */}
      <TopHeader />
      <Header />
      
      <div className="flex">
        {/* Left Side - Shopping Image */}
        <div className="hidden lg:flex lg:flex-1 items-end justify-center relative overflow-hidden min-h-[calc(100vh-10rem)] bg-blue-50">
          <div className="relative z-10 w-full max-w-2xl h-full flex items-end justify-center pb-0">
            {/* Main Shopping Image */}
            <div className="relative w-full h-[500px] bg-gradient-to-t from-pink-100 via-blue-50 to-transparent flex items-center justify-center">
              {/* Phone/Mobile Device */}
              <div className="relative">
                <div className="w-80 h-[600px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] flex flex-col">
                    {/* Phone Screen Content */}
                    <div className="flex-1 p-6 flex flex-col items-center justify-center">
                      {/* Shopping Cart Icon */}
                      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-6">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path d="M8 10L32 10L29.5 24H10.5L8 10ZM8 10L6 6H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="30" r="2" stroke="white" strokeWidth="2"/>
                          <circle cx="26" cy="30" r="2" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                      
                      {/* Shopping Text */}
                      <h3 className="font-inter font-semibold text-2xl text-neutral-900 mb-2 text-center">
                        Side Image
                      </h3>
                      <p className="font-poppins font-regular text-base text-neutral-600 text-center max-w-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-10 -left-10 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🛒</span>
                </div>
                <div className="absolute -top-5 -right-8 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">❤️</span>
                </div>
                <div className="absolute top-20 -left-8 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
