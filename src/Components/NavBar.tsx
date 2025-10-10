import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        {/* <Link to="/HomePage" className="text-2xl font-bold" onClick={closeMenu}>
          MyBrand
        </Link> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/HomePage" className="hover:text-blue-600">HomePage</Link></li>
          <li><Link to="/AboutPage" className="hover:text-blue-600">AboutPage</Link></li>
          <li><Link to="/CoursesPage" className="hover:text-blue-600">CoursesPage</Link></li>
          <li><Link to="/ContactPage" className="hover:text-blue-600">ContactPage</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4">
          <li><Link to="/HomePage" className="hover:text-blue-600" onClick={closeMenu}>HomePage</Link></li>
          <li><Link to="/AboutPage" className="hover:text-blue-600" onClick={closeMenu}>AboutPage</Link></li>
          <li><Link to="/CoursesPage" className="hover:text-blue-600" onClick={closeMenu}>CoursesPage</Link></li>
          <li><Link to="/ContactPage" className="hover:text-blue-600" onClick={closeMenu}>ContactPage</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
