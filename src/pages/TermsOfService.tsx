
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-callx-blue mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Call X Trade platform, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you do not have permission to access the service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">2. Description of Service</h2>
              <p>
                Call X Trade provides a platform connecting businesses with customer service professionals. 
                Our services include job matching, career development resources, and QR-based job offers.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. 
                You are responsible for safeguarding your password and for any activities or actions under your account.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">4. User Content</h2>
              <p>
                Our service allows you to post, link, store, share and otherwise make available certain information, text, 
                graphics, or other material. You are responsible for the content you post, including its legality, reliability, 
                and appropriateness.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">5. Job Offers and QR System</h2>
              <p>
                Job offers provided through our QR system are subject to verification by both the employer and candidate. 
                Call X Trade does not guarantee employment and is not responsible for the accuracy of job details provided 
                by employers.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">6. Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are and will remain the exclusive property 
                of Call X Trade. The service is protected by copyright, trademark, and other laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">7. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, 
                including without limitation if you breach the Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">8. Limitation of Liability</h2>
              <p>
                In no event shall Call X Trade, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to 
                provide at least 30 days' notice prior to any new terms taking effect.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <address className="not-italic mt-2">
                <p>Email: legal@callxtrade.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Business Avenue, Suite 100, San Francisco, CA 94107</p>
              </address>
            </section>
            
            <section>
              <p className="italic">Last updated: April 15, 2025</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
