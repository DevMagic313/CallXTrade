
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-callx-blue mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">1. Introduction</h2>
              <p>
                At Call X Trade, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you visit our website or use our services. Please read this policy carefully.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide when using our services, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Personal details such as name, email address, and phone number</li>
                <li>Professional information including work history and skill sets</li>
                <li>Account credentials</li>
                <li>Feedback and correspondence</li>
                <li>Usage information and preferences</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">3. How We Use Your Information</h2>
              <p>
                The information we collect may be used to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process job applications and match candidates with opportunities</li>
                <li>Communicate with you about services, offers, and promotions</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">4. Sharing Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Potential employers when you apply for positions</li>
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisors such as lawyers, accountants, and insurers</li>
                <li>Government bodies when required by law</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">5. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. 
                However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access to personal information we hold about you</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an 
                updated "Revised" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-callx-blue mb-3">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <address className="not-italic mt-2">
                <p>Email: privacy@callxtrade.com</p>
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

export default PrivacyPolicy;