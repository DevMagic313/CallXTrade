
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OfferLetterViewer from '@/components/careers/OfferLetterViewer';
import LiveChat from '@/components/chat/LiveChat';

const OfferLetterViewerPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <OfferLetterViewer />
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default OfferLetterViewerPage;
