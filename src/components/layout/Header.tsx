
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Briefcase } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-callx-blue text-white py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-callx-gold rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-callx-blue font-bold text-xl">CX</span>
          </div>
          <span className="font-bold text-xl hidden sm:block">Call X Trade</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-callx-gold transition-colors">Home</Link>
          <Link to="/services" className="hover:text-callx-gold transition-colors">Services</Link>
          <Link to="/careers" className="hover:text-callx-gold transition-colors">Careers</Link>
          <Link to="/about-us" className="hover:text-callx-gold transition-colors">About Us</Link>
          <Link to="/contact-us" className="hover:text-callx-gold transition-colors">Contact</Link>
          <Link to="/dashboard" className="flex items-center space-x-1 hover:text-callx-gold transition-colors">
            <User size={18} />
            <span>Dashboard</span>
          </Link>
          <Link to="/profile" className="bg-callx-gold text-callx-blue px-4 py-1.5 rounded-full hover:bg-white transition-colors">
            Profile
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-callx-blue py-4 px-4 animate-slide-in-right">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-callx-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-callx-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/careers" 
              className="text-white hover:text-callx-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/about-us" 
              className="text-white hover:text-callx-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact-us" 
              className="text-white hover:text-callx-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/dashboard" 
              className="text-white hover:text-callx-gold transition-colors py-2 flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={18} />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/profile" 
              className="bg-callx-gold text-callx-blue px-4 py-2 rounded-full hover:bg-white transition-colors inline-block w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;