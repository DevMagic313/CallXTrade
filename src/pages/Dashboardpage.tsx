
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Dashboard from '@/components/dashboard/Dashboard';
import LiveChat from '@/components/chat/LiveChat';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Dashboard />
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default DashboardPage;
