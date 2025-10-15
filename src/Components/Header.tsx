import { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white  fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between h-20">
        
        {/*  Logo */}
        <Link to="/HomePage" onClick={closeMenu}>
          <img
            src="public/Skillitgh_ (1).png"
            alt="Skillitgh logo"
            className="w-40"
          />
        </Link>

        {/*  Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semi-bold text-1xl">
          <li><Link to="/HomePage" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/AboutPage" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/CoursesPage" className="hover:text-blue-600">Courses</Link></li>
          <li><Link to="/ContactPage" className="hover:text-blue-600">Contact</Link></li>
        </ul>

        {/*  Login Button */}
        <Link to="/LoginPage" className="hidden md:block">
          <button className="my-custom-btn">
            Login <MdArrowOutward className="mt-1" />
          </button>
        </Link>

        {/*  Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/*  Sliding Left Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col gap-6 px-6 pt-24">
             <img
            src="public/Skillitgh_ (1).png"
            alt="Skillitgh logo"
            className="w-40"
          />
          <li><Link to="/HomePage" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/AboutPage" onClick={closeMenu}>About</Link></li>
          <li><Link to="/CoursesPage" onClick={closeMenu}>Courses</Link></li>
          <li><Link to="/ContactPage" onClick={closeMenu}>Contact</Link></li>
          <li>
            <Link to="/LoginPage" onClick={closeMenu}>
              <button className="my-custom-btn flex items-center gap-1">
                Login <MdArrowOutward className="mt-1" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
