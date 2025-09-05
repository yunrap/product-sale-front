import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-500 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-8 lg:px-32 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-poppins font-semibold text-xl mb-6">Exclusive</h3>
            <p className="font-poppins text-base mb-4">Subscribe</p>
            <p className="font-poppins text-sm text-neutral-200 mb-6 leading-relaxed">
              Get 10% off your first order
            </p>
            
            {/* Email Subscription */}
            <div className="relative max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-4 pr-12 bg-transparent border border-white rounded text-white placeholder:text-neutral-200 font-poppins text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-80 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 2L22 6L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-poppins font-medium text-lg mb-6">Support</h4>
            <div className="space-y-4">
              <p className="font-poppins text-sm text-neutral-200 leading-relaxed">
                111 Bijoy sarani, Dhaka,<br />
                DH 1515, Bangladesh.
              </p>
              <p className="font-poppins text-sm text-neutral-200">
                exclusive@gmail.com
              </p>
              <p className="font-poppins text-sm text-neutral-200">
                +88015-88888-9999
              </p>
            </div>
          </div>

          {/* Account Links */}
          <div>
            <h4 className="font-poppins font-medium text-lg mb-6">Account</h4>
            <div className="space-y-3">
              <Link to="/mypage" className="block font-poppins text-sm text-neutral-200 hover:text-white transition-colors">
                My Account
              </Link>
              <Link to="/register" className="block font-poppins text-sm text-neutral-200 hover:text-white transition-colors">
                Login / Register
              </Link>
              <Link to="/cart" className="block font-poppins text-sm text-neutral-200 hover:text-white transition-colors">
                Cart
              </Link>
              <Link to="/wishlist" className="block font-poppins text-sm text-neutral-200 hover:text-white transition-colors">
                Wishlist
              </Link>
              <Link to="/shop" className="block font-poppins text-sm text-neutral-200 hover:text-white transition-colors">
                Shop
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-medium text-lg mb-6">Quick Link</h4>
            <div className="space-y-3">
              <Link to="/privacy-policy" className="block font-poppins text-sm text-neutral-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block font-poppins text-sm text-neutral-200 hover:text-white transition-colors">
                Terms Of Use
              </Link>
              <Link to="/faq" className="block font-poppins text-sm text-neutral-200 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="block font-poppins text-sm text-neutral-200 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-neutral-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* App Download */}
            <div>
              <p className="font-poppins text-sm mb-4">Download App</p>
              <div className="flex items-center gap-2">
                <p className="font-poppins text-xs text-neutral-200">Save $3 with App New User Only</p>
              </div>
              <div className="flex gap-2 mt-2">
                {/* QR Code Placeholder */}
                <div className="w-20 h-20 bg-neutral-400 border border-neutral-300 rounded flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
                    <rect x="0" y="0" width="6" height="6"/>
                    <rect x="8" y="0" width="6" height="6"/>
                    <rect x="16" y="0" width="6" height="6"/>
                    <rect x="26" y="0" width="6" height="6"/>
                    <rect x="34" y="0" width="6" height="6"/>
                    <rect x="0" y="8" width="6" height="6"/>
                    <rect x="34" y="8" width="6" height="6"/>
                    <rect x="0" y="16" width="6" height="6"/>
                    <rect x="8" y="16" width="6" height="6"/>
                    <rect x="16" y="16" width="6" height="6"/>
                    <rect x="26" y="16" width="6" height="6"/>
                    <rect x="34" y="16" width="6" height="6"/>
                    <rect x="0" y="26" width="6" height="6"/>
                    <rect x="8" y="26" width="6" height="6"/>
                    <rect x="16" y="26" width="6" height="6"/>
                    <rect x="34" y="26" width="6" height="6"/>
                    <rect x="0" y="34" width="6" height="6"/>
                    <rect x="8" y="34" width="6" height="6"/>
                    <rect x="16" y="34" width="6" height="6"/>
                    <rect x="26" y="34" width="6" height="6"/>
                    <rect x="34" y="34" width="6" height="6"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  {/* App Store Buttons */}
                  <button className="flex items-center gap-2 bg-neutral-600 hover:bg-neutral-700 transition-colors px-3 py-2 rounded border border-neutral-400">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm2.17 14.85c-.69.28-1.44.42-2.17.42s-1.48-.14-2.17-.42c-.42-.17-.69-.59-.69-1.04V6.19c0-.45.27-.87.69-1.04C8.52 4.86 9.24 4.72 10 4.72s1.48.14 2.17.42c.42.17.69.59.69 1.04v7.62c0 .45-.27.87-.69 1.04z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-neutral-200">Get it on</p>
                      <p className="text-sm font-medium">Google Play</p>
                    </div>
                  </button>
                  <button className="flex items-center gap-2 bg-neutral-600 hover:bg-neutral-700 transition-colors px-3 py-2 rounded border border-neutral-400">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M16.84 7.16c-.51-.26-1.09-.39-1.68-.39-.33 0-.66.05-.97.14-.9.27-1.76.84-2.29 1.54-.89-1.1-2.26-1.82-3.77-1.82C6.13 6.63 5 7.73 5 9.09v4.82C5 15.27 6.13 16.37 7.13 16.37c1 0 1.81-.81 1.81-1.81v-3.65c0-.5.4-.9.9-.9s.9.4.9.9v3.65c0 1 .81 1.81 1.81 1.81s1.81-.81 1.81-1.81v-2.7c.69.21 1.43.01 1.98-.53.78-.78.78-2.05 0-2.83-.39-.39-.9-.58-1.4-.58z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-neutral-200">Download on the</p>
                      <p className="text-sm font-medium">App Store</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.888 2.741.097.118.112.22.083.339-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-neutral-600 py-4">
        <div className="w-full px-4 sm:px-8 lg:px-32">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-poppins text-sm text-neutral-200">
              © Copyright Rimel 2022. All right reserved
            </p>
            <div className="flex items-center gap-6">
              <p className="font-poppins text-sm text-neutral-200">Privacy & Policy</p>
              <p className="font-poppins text-sm text-neutral-200">Terms of Use</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;