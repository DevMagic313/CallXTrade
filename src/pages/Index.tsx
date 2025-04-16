
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import LiveChat from '@/components/chat/LiveChat';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesGrid />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-callx-blue">Ready to Transform Your Career?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our QR-based job offer system makes it easy to find and accept new opportunities. Scan, review, and decide—all in one seamless experience.
            </p>
            <Link 
              to="/careers" 
              className="cta-button inline-block"
              aria-label="Explore opportunities"
            >
              Explore Opportunities
            </Link>
          </div>
        </section>
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Index;
