import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { verifyOfferToken, isOfferExpired, type OfferData } from '@/utils/qrUtils';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { Download, Check, X, Share, Clock, AlertTriangle } from 'lucide-react';

// Register Font for PDF
Font.register({
  family: 'Merriweather',
  src: 'https://fonts.gstatic.com/s/merriweather/v30/u-440qyriQwlOrhSvowK_l5-fCZM.woff2',
});

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: 'Merriweather',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1A237E',
  },
  companyInfo: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    marginBottom: 20,
    lineHeight: 1.5,
  },
  offerDetails: {
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 5,
  },
  detailsHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailsLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    width: 100,
  },
  detailsValue: {
    fontSize: 12,
  },
  benefitsList: {
    marginLeft: 15,
  },
  benefitsItem: {
    fontSize: 12,
    marginBottom: 3,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    textAlign: 'center',
    fontSize: 10,
    color: '#666',
  },
  signature: {
    marginTop: 50,
    fontSize: 12,
  },
  signatureLine: {
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: 50,
    marginBottom: 10,
  },
});

// OfferLetter PDF Document
const OfferLetterPDF = ({ offerData }: { offerData: OfferData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Call X Trade Job Offer</Text>
      <Text style={styles.companyInfo}>
        Call X Trade Inc. | 123 Business Avenue, Suite 100 | San Francisco, CA 94107
      </Text>
      
      <View style={styles.section}>
        <Text style={styles.title}>Job Offer: {offerData.position}</Text>
        <Text style={styles.content}>
          Dear Candidate,
          {'\n\n'}
          We are pleased to offer you the position of {offerData.position} at {offerData.company}. 
          This offer is based on our evaluation of your skills, experience, and potential contribution to our team.
          {'\n\n'}
          This offer is valid until {new Date(offerData.expiry).toLocaleDateString()}.
        </Text>
        
        <View style={styles.offerDetails}>
          <Text style={styles.detailsHeading}>Offer Details:</Text>
          
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Position:</Text>
            <Text style={styles.detailsValue}>{offerData.position}</Text>
          </View>
          
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Company:</Text>
            <Text style={styles.detailsValue}>{offerData.company}</Text>
          </View>
          
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Location:</Text>
            <Text style={styles.detailsValue}>{offerData.location}</Text>
          </View>
          
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Salary:</Text>
            <Text style={styles.detailsValue}>{offerData.salary}</Text>
          </View>
          
          <Text style={{ ...styles.detailsLabel, marginTop: 10 }}>Benefits:</Text>
          <View style={styles.benefitsList}>
            {offerData.benefits.map((benefit, index) => (
              <Text key={index} style={styles.benefitsItem}>• {benefit}</Text>
            ))}
          </View>
          
          {offerData.requirements && (
            <>
              <Text style={{ ...styles.detailsLabel, marginTop: 10 }}>Requirements:</Text>
              <View style={styles.benefitsList}>
                {offerData.requirements.map((req, index) => (
                  <Text key={index} style={styles.benefitsItem}>• {req}</Text>
                ))}
              </View>
            </>
          )}
        </View>
        
        <Text style={styles.content}>
          We look forward to your positive response and to welcoming you to the Call X Trade team.
          {'\n\n'}
          Sincerely,
        </Text>
        
        <View style={styles.signature}>
          <View style={styles.signatureLine} />
          <Text>John Smith</Text>
          <Text>HR Director, Call X Trade Inc.</Text>
        </View>
      </View>
      
      <Text style={styles.footer}>
        This document is electronically generated and is valid without a signature.
        Offer ID: {offerData.id} • Generated on: {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

const OfferLetterViewer = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  
  const [offerData, setOfferData] = useState<OfferData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>('');
  
  useEffect(() => {
    if (!token || !id) {
      setError('Invalid or missing offer token');
      setIsLoading(false);
      return;
    }
    
    try {
      // Verify the token
      const decoded = verifyOfferToken(token);
      
      if (!decoded) {
        setError('This offer link is invalid or has been tampered with');
        setIsLoading(false);
        return;
      }
      
      if (decoded.id !== id) {
        setError('Offer ID mismatch');
        setIsLoading(false);
        return;
      }
      
      if (isOfferExpired(decoded.expiry)) {
        setError('This job offer has expired');
        setIsLoading(false);
        return;
      }
      
      setOfferData(decoded);
      setIsLoading(false);
      
      // Calculate expiry time
      const updateTimeLeft = () => {
        const expiryDate = new Date(decoded.expiry);
        const now = new Date();
        const diff = expiryDate.getTime() - now.getTime();
        
        if (diff <= 0) {
          setTimeLeft('Expired');
          setError('This job offer has expired');
          return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${hours}h ${minutes}m`);
      };
      
      updateTimeLeft();
      const interval = setInterval(updateTimeLeft, 60000); // Update every minute
      
      return () => clearInterval(interval);
    } catch (error) {
      console.error('Error processing token:', error);
      setError('Failed to process the offer data');
      setIsLoading(false);
    }
  }, [token, id]);

  const handleAccept = () => {
    alert('Thank you for accepting the offer! An HR representative will contact you shortly.');
    // In a real app, this would submit acceptance to the backend
  };

  const handleDecline = () => {
    const confirmed = window.confirm('Are you sure you want to decline this job offer?');
    if (confirmed) {
      alert('Offer declined. Thank you for your consideration.');
      navigate('/careers');
    }
  };

  const handleShare = async () => {
    if (navigator.share && offerData) {
      try {
        await navigator.share({
          title: `Job Offer: ${offerData.position} at ${offerData.company}`,
          text: `Check out this job offer for ${offerData.position} at ${offerData.company}!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-callx-blue border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Verifying offer...</p>
        </div>
      </div>
    );
  }

  if (error || !offerData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100">
            <AlertTriangle size={32} className="text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Offer Error</h2>
          <p className="text-center text-gray-600 mb-6">{error || 'An unknown error occurred'}</p>
          <div className="flex justify-center">
            <button 
              onClick={() => navigate('/careers')}
              className="px-4 py-2 bg-callx-blue text-white rounded-lg hover:bg-callx-blue/90 transition"
            >
              View Other Opportunities
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="offer-letter">
          <div className="bg-gradient-blue text-white p-6 rounded-t-lg">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-bold">Job Offer</h1>
                <p className="text-white/80">ID: {offerData.id}</p>
              </div>
              <div className="flex items-center text-sm text-callx-gold bg-white/10 px-3 py-1 rounded-full">
                <Clock size={16} className="mr-1" />
                <span>Expires in: {timeLeft}</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-1">{offerData.position}</h2>
            <p className="text-xl font-light">{offerData.company} • {offerData.location}</p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-b-lg shadow-md">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-callx-blue mb-4">Offer Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Compensation</h4>
                  <p className="text-2xl font-bold text-callx-gold">{offerData.salary}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {offerData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {offerData.requirements && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {offerData.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="border-t pt-8 mt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex gap-3">
                  <button 
                    onClick={handleAccept}
                    className="flex items-center px-5 py-2.5 bg-callx-blue text-white rounded-lg hover:bg-callx-blue/90 transition shadow-md"
                  >
                    <Check size={18} className="mr-2" />
                    <span>Accept Offer</span>
                  </button>
                  
                  <button 
                    onClick={handleDecline}
                    className="flex items-center px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    <X size={18} className="mr-2" />
                    <span>Decline</span>
                  </button>
                </div>
                
                <div className="flex gap-3">
                  <PDFDownloadLink
                    document={<OfferLetterPDF offerData={offerData} />}
                    fileName={`${offerData.position.replace(/\s+/g, '-')}-job-offer.pdf`}
                    className="flex items-center px-4 py-2 bg-callx-gold text-callx-blue rounded-lg hover:bg-callx-gold/90 transition shadow-md"
                  >
                    {({ loading }) => (
                      <>
                        <Download size={18} className="mr-2" />
                        <span>{loading ? 'Generating...' : 'Download PDF'}</span>
                      </>
                    )}
                  </PDFDownloadLink>
                  
                  <button 
                    onClick={handleShare}
                    className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                    aria-label="Share job offer"
                  >
                    <Share size={18} className="mr-2" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 text-gray-500 text-sm">
              <p className="mb-2">
                This offer is valid until <span className="font-semibold">{new Date(offerData.expiry).toLocaleDateString()}</span>.
              </p>
              <p>
                For questions regarding this offer, please contact our HR department at{' '}
                <a href="mailto:hr@callxtrade.com" className="text-callx-blue hover:underline">hr@callxtrade.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferLetterViewer;