
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LiveChat from '@/components/chat/LiveChat';
import { Headphones, Users, UserPlus, BarChart, PhoneCall, Briefcase, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="bg-callx-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Comprehensive customer service solutions tailored to your business needs, with innovative recruitment and staffing technologies.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-callx-blue mb-6">QR-Based Job Offer System</h2>
                <p className="text-gray-600 mb-6">
                  Our flagship service revolutionizes the hiring process with secure, efficient QR-based job offers that streamline the recruitment workflow.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">24-hour expiration for enhanced security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">HMAC verification to prevent tampering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Unique session tokens for each candidate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Printable offer letter with digital signature</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Real-time acceptance tracking and analytics</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="bg-white rounded-lg shadow-lg p-8 qr-section">
                  <div className="mb-4 text-center">
                    <Briefcase size={48} className="mx-auto text-white mb-4" />
                    <h3 className="text-xl font-bold text-white">Secure QR Job Offers</h3>
                    <p className="text-blue-100 mt-2">
                      Scan, Review, Accept – Streamlined Hiring Process
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-callx-blue font-bold text-3xl mb-2">
                        98%
                      </div>
                      <div className="text-gray-600 text-sm">
                        Faster Response Rate
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-callx-blue font-bold text-3xl mb-2">
                        75%
                      </div>
                      <div className="text-gray-600 text-sm">
                        Reduced Paperwork
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-callx-blue mb-12">Comprehensive Service Offerings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="bg-blue-100 text-callx-blue rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <UserPlus size={32} />
                </div>
                <h3 className="text-xl font-bold text-callx-blue mb-4">Agent Recruitment</h3>
                <p className="text-gray-600 mb-4">
                  Find and hire top-tier customer service agents with our advanced screening process.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Skills assessment and personality matching
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Background verification and reference checks
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Cultural fit evaluation for your team
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="bg-amber-100 text-amber-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <PhoneCall size={32} />
                </div>
                <h3 className="text-xl font-bold text-callx-blue mb-4">Call Center Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Complete call center set-up and management services for businesses.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Infrastructure design and implementation
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    CRM and software integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Quality monitoring and optimization
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-callx-blue mb-4">Team Training</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training programs for customer service excellence.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Customized training curriculum
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Soft skills and technical knowledge
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Ongoing professional development
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="bg-purple-100 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart size={32} />
                </div>
                <h3 className="text-xl font-bold text-callx-blue mb-4">Performance Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Detailed monitoring and analysis of agent performance metrics.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Real-time KPI dashboards
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Custom reporting and insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Performance improvement strategies
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="bg-indigo-100 text-indigo-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Headphones size={32} />
                </div>
                <h3 className="text-xl font-bold text-callx-blue mb-4">24/7 Support</h3>
                <p className="text-gray-600 mb-4">
                  Round-the-clock customer service support for your business.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Always-available customer assistance
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Multiple language support
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Omnichannel communication
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="bg-red-100 text-red-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-xl font-bold text-callx-blue mb-4">Offer Management</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end management of the job offering and onboarding process.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Automated offer generation
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Digital acceptance tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-callx-gold mr-2">•</span>
                    Streamlined onboarding workflow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-callx-blue">Ready to Revolutionize Your Customer Service?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Join the businesses already benefiting from our innovative approach to customer service recruitment and management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="cta-button inline-block"
                aria-label="Contact us"
              >
                Contact Us
              </a>
              
              <a 
                href="/careers" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-callx-blue text-callx-blue rounded-full
                  hover:bg-callx-blue hover:text-white transition duration-300 font-bold"
                aria-label="View job offers"
              >
                View Job Offers
              </a>
            </div>
          </div>
        </section>
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Services;