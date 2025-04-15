
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QRJobOffer from '@/components/careers/QRJobOffer';
import LiveChat from '@/components/chat/LiveChat';
import { Briefcase, MapPin, DollarSign, CheckCircle, Filter } from 'lucide-react';

interface JobListing {
  id: string;
  position: string;
  company: string;
  location: string;
  salary: string;
  benefits: string[];
  requirements?: string[];
  description: string;
  type: string;
  postedAt: string;
  expiry: string;
}

const jobListings: JobListing[] = [
  {
    id: "JOB001",
    position: "Customer Support Agent",
    company: "Call X Trade",
    location: "San Francisco, CA",
    salary: "$45,000 - $55,000",
    benefits: ["Health Insurance", "401k Matching", "Paid Training"],
    requirements: ["2+ years experience", "Bilingual+"],
    description: "Join our team as a customer support agent to help our clients with their needs. You'll be the first point of contact for customers and provide exceptional service.",
    type: "Full-time",
    postedAt: "2023-04-05",
    expiry: "2023-07-05"
  },
  {
    id: "JOB002",
    position: "Technical Support Specialist",
    company: "Tech Solutions Inc.",
    location: "Remote",
    salary: "$50,000 - $65,000",
    benefits: ["Remote Work", "Healthcare", "Professional Development"],
    requirements: ["3+ years technical support", "IT certifications"],
    description: "As a technical support specialist, you'll troubleshoot complex issues and provide technical assistance to our clients. Strong problem-solving skills required.",
    type: "Full-time",
    postedAt: "2023-04-02",
    expiry: "2023-07-02"
  },
  {
    id: "JOB003",
    position: "Call Center Team Lead",
    company: "Global Services LLC",
    location: "Chicago, IL",
    salary: "$60,000 - $70,000",
    benefits: ["Comprehensive Benefits", "Leadership Training", "Performance Bonuses"],
    requirements: ["5+ years call center experience", "2+ years leadership"],
    description: "Lead a team of customer service representatives, ensuring high-quality service and performance. You'll be responsible for training, coaching, and performance evaluation.",
    type: "Full-time",
    postedAt: "2023-03-28",
    expiry: "2023-06-28"
  },
  {
    id: "JOB004",
    position: "Bilingual Customer Rep",
    company: "International Support Co.",
    location: "Austin, TX",
    salary: "$48,000 - $58,000",
    benefits: ["Bilingual Pay Differential", "Health Benefits", "Flexible Schedule"],
    requirements: ["Fluent in English and Spanish", "1+ year customer service"],
    description: "Provide customer support in both English and Spanish. You'll handle customer inquiries, process orders, and resolve issues for our diverse customer base.",
    type: "Full-time",
    postedAt: "2023-03-15",
    expiry: "2023-06-15"
  },
  {
    id: "JOB005",
    position: "Part-Time Support Agent",
    company: "Call X Trade",
    location: "Denver, CO",
    salary: "$20 - $25/hour",
    benefits: ["Flexible Hours", "Paid Time Off", "Growth Opportunities"],
    description: "Join our team part-time to provide exceptional customer service. Perfect for students or those seeking flexible work arrangements.",
    type: "Part-time",
    postedAt: "2023-04-10",
    expiry: "2023-07-10"
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [showQrOffer, setShowQrOffer] = useState(false);
  const [filterLocation, setFilterLocation] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('');
  
  const filteredJobs = jobListings.filter(job => {
    if (filterLocation && !job.location.toLowerCase().includes(filterLocation.toLowerCase())) {
      return false;
    }
    if (filterType && job.type !== filterType) {
      return false;
    }
    return true;
  });

  const handleJobSelect = (job: JobListing) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApply = () => {
    setShowQrOffer(true);
    // In a real app, we would generate a new token here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="bg-callx-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Careers at Call X Trade</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Join our team of customer service professionals and build a rewarding career with our innovative approach to job offers and career advancement.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Job Listings & Filters */}
            <div className="lg:col-span-2">
              {/* Filters */}
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Filter size={18} className="text-gray-500 mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">Filters</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location-filter" className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <select
                      id="location-filter"
                      value={filterLocation}
                      onChange={(e) => setFilterLocation(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md focus:outline-none focus:ring-callx-blue focus:border-callx-blue"
                    >
                      <option value="">All Locations</option>
                      <option value="San Francisco">San Francisco</option>
                      <option value="Remote">Remote</option>
                      <option value="Chicago">Chicago</option>
                      <option value="Austin">Austin</option>
                      <option value="Denver">Denver</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700">
                      Type
                    </label>
                    <select
                      id="type-filter"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md focus:outline-none focus:ring-callx-blue focus:border-callx-blue"
                    >
                      <option value="">All Types</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-callx-blue">Open Positions</h2>
              
              {filteredJobs.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No job listings match your criteria. Please try different filters.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredJobs.map((job) => (
                    <div 
                      key={job.id}
                      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 border-l-4 ${
                        selectedJob?.id === job.id ? 'border-callx-gold' : 'border-callx-blue'
                      } cursor-pointer`}
                      onClick={() => handleJobSelect(job)}
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <h3 className="text-xl font-bold text-callx-blue mb-2">{job.position}</h3>
                          <p className="text-gray-600 mb-3">{job.company}</p>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            <span className="flex items-center">
                              <MapPin size={16} className="mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Briefcase size={16} className="mr-1" />
                              {job.type}
                            </span>
                            <span className="flex items-center">
                              <DollarSign size={16} className="mr-1" />
                              {job.salary}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-callx-blue rounded-full text-sm">
                            {new Date(job.postedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Right Column - Job Details or QR Offer */}
            <div className="lg:col-span-1">
              {showQrOffer && selectedJob ? (
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
                  <h3 className="text-xl font-bold text-center text-callx-blue mb-4">Your Job Offer</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Scan this QR code to view and respond to your job offer.
                  </p>
                  <QRJobOffer 
                    offerData={{
                      id: selectedJob.id,
                      position: selectedJob.position,
                      company: selectedJob.company,
                      location: selectedJob.location,
                      salary: selectedJob.salary,
                      benefits: selectedJob.benefits,
                      requirements: selectedJob.requirements,
                      expiry: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
                    }}
                    qrSize={180}
                  />
                  <button
                    onClick={() => setShowQrOffer(false)}
                    className="w-full mt-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                  >
                    Back to Job Details
                  </button>
                </div>
              ) : selectedJob ? (
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
                  <div className="mb-4 pb-4 border-b">
                    <h3 className="text-2xl font-bold text-callx-blue">{selectedJob.position}</h3>
                    <p className="text-lg text-gray-700">{selectedJob.company} • {selectedJob.location}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h4>
                    <p className="text-gray-600 mb-4">{selectedJob.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h4>
                      <ul className="space-y-1 text-gray-600">
                        {selectedJob.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {selectedJob.requirements && (
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Requirements</h4>
                        <ul className="space-y-1 text-gray-600">
                          {selectedJob.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-gray-400 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={handleApply}
                    className="w-full bg-callx-blue text-white py-3 px-6 rounded-md hover:bg-callx-blue/90 transition shadow-md"
                  >
                    Apply with QR
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
                  <div className="text-center">
                    <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Job Details</h3>
                    <p className="text-gray-500">Select a job from the list to view details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Careers;