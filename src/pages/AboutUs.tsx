
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Award, TrendingUp, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-callx-blue mb-8 text-center">About Call X Trade</h1>
          
          {/* Company Vision */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-700 mb-6">
                Call X Trade is revolutionizing the customer service industry by creating 
                a platform that connects talented agents with businesses seeking exceptional customer support.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to elevate the standard of customer service worldwide while 
                providing rewarding career opportunities for dedicated professionals.
              </p>
            </div>
          </section>
          
          {/* Company Values */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-callx-blue mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-callx-blue text-white rounded-full mb-4">
                  <Users size={30} />
                </div>
                <h3 className="text-xl font-semibold text-callx-blue mb-3">People First</h3>
                <p className="text-gray-600">
                  We believe in creating an environment where both agents and businesses thrive.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-callx-blue text-white rounded-full mb-4">
                  <Award size={30} />
                </div>
                <h3 className="text-xl font-semibold text-callx-blue mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every interaction and solution we provide.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-callx-blue text-white rounded-full mb-4">
                  <TrendingUp size={30} />
                </div>
                <h3 className="text-xl font-semibold text-callx-blue mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new technologies and ideas to continuously improve our services.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-callx-blue text-white rounded-full mb-4">
                  <Globe size={30} />
                </div>
                <h3 className="text-xl font-semibold text-callx-blue mb-3">Global Reach</h3>
                <p className="text-gray-600">
                  We connect talented professionals with opportunities worldwide.
                </p>
              </div>
            </div>
          </section>
          
          {/* Company Story */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-callx-blue mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2023, Call X Trade emerged from a simple observation: while customer 
                  service is crucial for business success, there was no dedicated platform connecting 
                  skilled agents with quality opportunities.
                </p>
                <p>
                  Our founders, having worked extensively in the customer service industry, recognized 
                  the need for a solution that would elevate the profession while providing businesses 
                  with access to top-tier talent.
                </p>
                <p>
                  Starting with a small team of industry veterans, Call X Trade quickly grew into a 
                  comprehensive platform serving thousands of professionals and businesses across the globe.
                </p>
                <p>
                  Today, we're proud to be at the forefront of customer service innovation, pioneering 
                  technologies like our QR-based job offer system and AI-powered skill matching.
                </p>
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section>
            <h2 className="text-2xl font-bold text-callx-blue mb-8 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="Sarah Johnson" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-callx-blue">Sarah Johnson</h3>
                <p className="text-gray-600">Chief Executive Officer</p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-callx-blue">Michael Chen</h3>
                <p className="text-gray-600">Chief Technology Officer</p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Elena Rodriguez" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-callx-blue">Elena Rodriguez</h3>
                <p className="text-gray-600">Chief Operations Officer</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;