import React from "react";

const Footer_comp = () => {
  return (
    <footer className="bg-black text-white py-10">
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold">E-Shop</h2>
            <p className="mt-2 text-gray-400">
              Your one-stop shop for all your needs. Quality products at the best prices.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: support@eshop.com</p>
            <p className="text-gray-400">Phone: +1 123 456 7890</p>
            <p className="text-gray-400">Address: 123 E-Shop St, NY, USA</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-400 text-sm">
          © 2025 E-Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer_comp;
