
import { jwtDecode } from 'jwt-decode';

export interface OfferData {
  id: string;
  position: string;
  salary: string;
  benefits: string[];
  requirements?: string[];
  company: string;
  location: string;
  expiry: string;
}

// Secret key for JWT signing (in a real app, this would be in environment variables)
const SECRET_KEY = 'call-x-trade-secret-key';

/**
 * Generate a simple encoded token for a job offer
 */
export const generateOfferToken = (offerData: OfferData): string => {
  // Create a payload with expiry
  const payload = {
    ...offerData,
    exp: Math.floor(Date.now() / 1000) + (24 * 3600)
  };
  
  // In a browser environment, we'll use base64 encoding as a simple alternative
  // Note: In a production app, you'd use a proper JWT library with backend signing
  return btoa(JSON.stringify(payload));
};

/**
 * Verify and decode a job offer token
 */
export const verifyOfferToken = (token: string): OfferData | null => {
  try {
    // Decode the base64 token
    const decoded = JSON.parse(atob(token)) as OfferData;
    
    // Check if token is expired
    const currentTime = Math.floor(Date.now() / 1000);
    const expTime = parseInt(decoded.expiry);
    
    if (expTime < currentTime) {
      console.error('Token expired');
      return null;
    }
    
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
};

/**
 * Check if an offer is expired
 */
export const isOfferExpired = (expiry: string): boolean => {
  const expiryDate = new Date(expiry);
  const now = new Date();
  return expiryDate < now;
};

/**
 * Format salary range for display
 */
export const formatSalary = (salary: string): string => {
  return salary.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Generate a short URL fallback for accessibility
 */
export const generateShortUrl = (id: string): string => {
  return `https://cx.co/offer/${id}`;
};
