
import { Link } from 'react-router-dom';
import { QrCode, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-callx-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-callx-gold rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-callx-blue font-bold text-xl">CX</span>
              </div>
              <span className="font-bold text-xl">Call X Trade</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting businesses with top-tier customer service agents through innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-callx-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-callx-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-callx-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-callx-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-callx-gold transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-callx-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-callx-gold transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-callx-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-callx-gold transition-colors">Contact</Link></li>
              {/* <li><Link to="/profile" className="text-gray-300 hover:text-callx-gold transition-colors">Your Profile</Link></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Sheikh Zayed Road, Dubai Media City, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-gray-300">+971 4 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-gray-300">callxtrade764@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* QR Section */}
          <div className="qr-section rounded-lg p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4 text-center">Scan for Job Offers</h3>
            <div className="bg-white p-2 rounded-lg mb-4 hover-scale">
              <QrCode size={100} className="text-callx-blue" />
            </div>
            <Link to="/careers" className="text-callx-gold hover:underline text-center">
              View All Career Opportunities
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Call X Trade. All rights reserved | Developed By DevMagic</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-callx-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-callx-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
