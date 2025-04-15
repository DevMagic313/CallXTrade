
import { useState } from 'react';
import { Headphones, Users, UserPlus, BarChart, PhoneCall, Briefcase } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const services: Service[] = [
    {
      id: 1,
      title: "Agent Recruitment",
      description: "Find and hire top-tier customer service agents with our advanced screening process.",
      icon: <UserPlus size={36} />,
      color: "bg-blue-100 text-callx-blue"
    },
    {
      id: 2,
      title: "QR-Based Job Offers",
      description: "Innovative job offer delivery system with secure QR code technology.",
      icon: <Briefcase size={36} />,
      color: "bg-amber-100 text-amber-700"
    },
    {
      id: 3,
      title: "Call Center Solutions",
      description: "Complete call center set-up and management services for businesses.",
      icon: <PhoneCall size={36} />,
      color: "bg-green-100 text-green-700"
    },
    {
      id: 4,
      title: "Team Training",
      description: "Comprehensive training programs for customer service excellence.",
      icon: <Users size={36} />,
      color: "bg-purple-100 text-purple-700"
    },
    {
      id: 5,
      title: "Performance Analytics",
      description: "Detailed monitoring and analysis of agent performance metrics.",
      icon: <BarChart size={36} />,
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Round-the-clock customer service support for your business.",
      icon: <Headphones size={36} />,
      color: "bg-red-100 text-red-700"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-callx-blue">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of services to help your business excel in customer service and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`rounded-xl p-6 animated-card ${
                hoveredCard === service.id 
                  ? 'shadow-2xl -translate-y-2' 
                  : 'shadow-md'
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`${service.color} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-callx-blue">{service.title}</h3>
              
              <p className="text-gray-600">{service.description}</p>
              
              <div className={`mt-4 h-0.5 w-0 bg-callx-gold transition-all duration-300 ${
                hoveredCard === service.id ? 'w-1/3' : ''
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;