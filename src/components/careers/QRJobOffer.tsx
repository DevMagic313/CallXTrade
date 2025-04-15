
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { generateOfferToken, generateShortUrl, type OfferData } from '@/utils/qrUtils';
import { Download, Share, Clock } from 'lucide-react';

interface QRJobOfferProps {
  offerData: OfferData;
  qrSize?: number;
}

const QRJobOffer = ({ offerData, qrSize = 200 }: QRJobOfferProps) => {
  const [token, setToken] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    try {
      // Generate token for the offer
      const generatedToken = generateOfferToken(offerData);
      setToken(generatedToken);
      
      // Calculate expiry time
      const updateTimeLeft = () => {
        const expiryDate = new Date(offerData.expiry);
        const now = new Date();
        const diff = expiryDate.getTime() - now.getTime();
        
        if (diff <= 0) {
          setTimeLeft('Expired');
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
      console.error('Error generating token:', error);
    }
  }, [offerData]);

  const qrValue = `${window.location.origin}/careers/offer/${offerData.id}?token=${token}`;
  const shortUrl = generateShortUrl(offerData.id);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Job Offer: ${offerData.position} at ${offerData.company}`,
          text: `Check out this job offer for ${offerData.position} at ${offerData.company}!`,
          url: qrValue,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(qrValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const svg = document.getElementById('job-offer-qr');
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      
      // Download PNG
      const downloadLink = document.createElement('a');
      downloadLink.download = `${offerData.position.replace(/\s+/g, '-')}-job-offer.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-callx-blue">{offerData.position}</h3>
        <p className="text-gray-500">{offerData.company} • {offerData.location}</p>
        
        <div className="flex items-center justify-center mt-2 text-sm text-callx-gold">
          <Clock size={16} className="mr-1" />
          <span>Expires in: {timeLeft}</span>
        </div>
      </div>
      
      <div className="qr-container bg-white p-4 rounded-lg border-2 border-callx-blue mb-6 mx-auto w-fit">
        <QRCodeSVG 
          id="job-offer-qr"
          value={qrValue}
          size={qrSize}
          bgColor={'#FFFFFF'}
          fgColor={'#1A237E'}
          level={'H'}
          includeMargin={true}
          imageSettings={{
            src: '/placeholder.svg',
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
      </div>
      
      <div className="text-center text-sm text-gray-500 mb-4" aria-label="Short URL for accessibility">
        <span>Short URL: </span>
        <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-callx-blue hover:underline">
          {shortUrl}
        </a>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button 
          onClick={handleDownload}
          className="flex items-center px-4 py-2 bg-callx-blue text-white rounded-lg hover:bg-callx-blue/90 transition"
          aria-label="Download QR code"
        >
          <Download size={18} className="mr-2" />
          <span>Download</span>
        </button>
        
        <button 
          onClick={handleShare}
          className="flex items-center px-4 py-2 bg-callx-gold text-callx-blue rounded-lg hover:bg-callx-gold/90 transition"
          aria-label="Share job offer"
        >
          <Share size={18} className="mr-2" />
          <span>{copied ? 'Copied!' : 'Share'}</span>
        </button>
      </div>
      
      <div className="mt-6 pt-5 border-t border-gray-100">
        <h4 className="font-semibold text-gray-800 mb-2">Offer Details:</h4>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><span className="font-medium">Salary:</span> {offerData.salary}</li>
          <li>
            <span className="font-medium">Benefits:</span>
            <ul className="list-disc ml-5 mt-1">
              {offerData.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </li>
          {offerData.requirements && (
            <li>
              <span className="font-medium">Requirements:</span>
              <ul className="list-disc ml-5 mt-1">
                {offerData.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default QRJobOffer;