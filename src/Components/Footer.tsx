// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // placeholder: handle subscription (API call etc.)
    alert("Thanks! (subscription handler not implemented)");
  };

  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="public/Skillitgh_ (1).png"
                alt="Skillitgh logo"
                className="w-36"
              />
            </div>

            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Skillitgh exceeded all my expectations! <br />The instructors were not only
              experts, <br />they made learning fun and practical. <br />Join Skillitgh to
              build industry-ready skills.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/AboutPage" className="hover:text-blue-600">About us</Link></li>
              <li><Link to="/CoursesPage" className="hover:text-blue-600">Courses</Link></li>
              <li><Link to="/InstructorPage" className="hover:text-blue-600">Instructor</Link></li>
              <li><Link to="/FAQs" className="hover:text-blue-600">FAQs</Link></li>
              <li><Link to="/Blogs" className="hover:text-blue-600">Blogs</Link></li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <h4 className="font-semibold mb-4">Category</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/ui-ux" className="hover:text-blue-600">UI/UX Design</Link></li>
              <li><Link to="/category/web-dev" className="hover:text-blue-600">Web Development</Link></li>
              <li><Link to="/category/python" className="hover:text-blue-600">Python Development</Link></li>
              <li><Link to="/category/digital-marketing" className="hover:text-blue-600">Digital Marketing</Link></li>
              <li><Link to="/category/graphic" className="hover:text-blue-600">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Contact & Subscribe */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>

            <ul className="text-sm space-y-3 text-gray-600">
              <li>📞 (207) 555-0110</li>
              <li>📞 (704) 555-0127</li>
              <li>✉️ osukakachukwu39@gmail.com</li>
              <li>✉️ Skillitgh@gmail.com</li>
              <li className="max-w-xs">📍 5488 Snear Rd, 8745 doer Dr.</li>
            </ul>

            {/* <h4 className="font-semibold mt-6 mb-3">Subscribe Here</h4> */}

            {/* <form onSubmit={handleSubscribe} className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Email..."
                required
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                ➤
              </button>
            </form> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <div>© {year} Skillitgh. All Rights Reserved.</div>

            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-600">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
