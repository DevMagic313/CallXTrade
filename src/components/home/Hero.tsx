
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-callx-blue text-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-callx-lightBlue opacity-20 rounded-full" />
        <div className="absolute left-20 bottom-10 w-40 h-40 bg-callx-gold opacity-10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="text-callx-gold">Revolutionizing</span> Customer Service Recruitment
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connecting top talent with leading companies through our innovative QR-based job offer system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => navigate('/careers')}
              className="cta-button"
              aria-label="View Job Opportunities"
            >
              View Job Opportunities
            </button>
            
            <button 
              onClick={() => navigate('/dashboard')}
              className="flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full
                hover:bg-white hover:text-callx-blue transition duration-300 font-bold"
              aria-label="Dashboard"
            >
              Dashboard <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg 
          className="relative block w-full h-8 sm:h-16" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,139.82,111.44,213.93,91.94Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
