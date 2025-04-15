
import React, { useState } from 'react';
import { 
  BarChart, Users, Briefcase, Clock, CheckCircle, XCircle, 
  ChevronDown, ChevronUp, FileText, Download 
} from 'lucide-react';

interface JobOffer {
  id: string;
  position: string;
  company: string;
  location: string;
  salary: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  date: string;
  expiresIn?: string;
}

interface Stats {
  activeOffers: number;
  acceptedOffers: number;
  offerViews: number;
  avgResponseTime: string;
}

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<'offers' | 'stats' | 'profile'>('offers');
  const [expandedOffer, setExpandedOffer] = useState<string | null>(null);

  const jobOffers: JobOffer[] = [
    {
      id: 'JO-2023-001',
      position: 'Customer Support Agent',
      company: 'Call X Trade',
      location: 'San Francisco, CA',
      salary: '$45,000 - $55,000',
      status: 'pending',
      date: '2023-04-10',
      expiresIn: '8h 30m'
    },
    {
      id: 'JO-2023-002',
      position: 'Technical Support Specialist',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      salary: '$50,000 - $65,000',
      status: 'accepted',
      date: '2023-04-05'
    },
    {
      id: 'JO-2023-003',
      position: 'Call Center Team Lead',
      company: 'Global Services LLC',
      location: 'Chicago, IL',
      salary: '$60,000 - $70,000',
      status: 'declined',
      date: '2023-03-28'
    },
    {
      id: 'JO-2023-004',
      position: 'Bilingual Customer Rep',
      company: 'International Support Co.',
      location: 'Austin, TX',
      salary: '$48,000 - $58,000',
      status: 'expired',
      date: '2023-03-15'
    }
  ];

  const stats: Stats = {
    activeOffers: 1,
    acceptedOffers: 1,
    offerViews: 36,
    avgResponseTime: '4.5 hours'
  };

  const toggleExpandOffer = (id: string) => {
    if (expandedOffer === id) {
      setExpandedOffer(null);
    } else {
      setExpandedOffer(id);
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'pending': return 'bg-amber-100 text-amber-700';
      case 'accepted': return 'bg-green-100 text-green-700';
      case 'declined': return 'bg-red-100 text-red-700';
      case 'expired': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'pending': return <Clock size={16} />;
      case 'accepted': return <CheckCircle size={16} />;
      case 'declined': return <XCircle size={16} />;
      case 'expired': return <Clock size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-callx-blue text-white p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h1 className="text-2xl font-bold mb-2">Agent Dashboard</h1>
                <p className="text-blue-100">Welcome back, John Doe</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <span className="inline-flex items-center px-3 py-1 bg-callx-gold text-callx-blue rounded-full text-sm font-medium">
                  Premium Agent
                </span>
              </div>
            </div>
          </div>
          
          {/* Dashboard Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex px-4 overflow-x-auto">
              <button
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  selectedTab === 'offers'
                    ? 'border-callx-gold text-callx-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition-colors`}
                onClick={() => setSelectedTab('offers')}
              >
                <div className="flex items-center">
                  <Briefcase size={18} className="mr-2" />
                  <span>Job Offers</span>
                </div>
              </button>
              
              <button
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  selectedTab === 'stats'
                    ? 'border-callx-gold text-callx-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition-colors`}
                onClick={() => setSelectedTab('stats')}
              >
                <div className="flex items-center">
                  <BarChart size={18} className="mr-2" />
                  <span>Stats</span>
                </div>
              </button>
              
              <button
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  selectedTab === 'profile'
                    ? 'border-callx-gold text-callx-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition-colors`}
                onClick={() => setSelectedTab('profile')}
              >
                <div className="flex items-center">
                  <Users size={18} className="mr-2" />
                  <span>Profile</span>
                </div>
              </button>
            </nav>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-6">
            {selectedTab === 'offers' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Job Offers</h2>
                
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg mb-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900">
                          Job Position
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 hidden sm:table-cell">
                          Company
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 hidden md:table-cell">
                          Date
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900">
                          Status
                        </th>
                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {jobOffers.map((offer) => (
                        <React.Fragment key={offer.id}>
                          <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => toggleExpandOffer(offer.id)}>
                            <td className="py-4 px-4 text-sm">
                              <div className="font-medium text-gray-900">{offer.position}</div>
                              <div className="text-gray-500 sm:hidden">{offer.company}</div>
                            </td>
                            <td className="py-4 px-4 text-sm text-gray-500 hidden sm:table-cell">
                              {offer.company}
                            </td>
                            <td className="py-4 px-4 text-sm text-gray-500 hidden md:table-cell">
                              {new Date(offer.date).toLocaleDateString()}
                            </td>
                            <td className="py-4 px-4 text-sm">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(offer.status)}`}>
                                {getStatusIcon(offer.status)}
                                <span className="ml-1 capitalize">{offer.status}</span>
                              </span>
                              {offer.expiresIn && (
                                <div className="text-xs text-gray-500 mt-1">
                                  Expires in: {offer.expiresIn}
                                </div>
                              )}
                            </td>
                            <td className="py-4 px-4 text-sm text-right">
                              <button
                                type="button"
                                className="text-gray-500 hover:text-callx-blue"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleExpandOffer(offer.id);
                                }}
                                aria-label={expandedOffer === offer.id ? "Collapse details" : "Expand details"}
                              >
                                {expandedOffer === offer.id ? (
                                  <ChevronUp size={18} />
                                ) : (
                                  <ChevronDown size={18} />
                                )}
                              </button>
                            </td>
                          </tr>
                          
                          {expandedOffer === offer.id && (
                            <tr>
                              <td colSpan={5} className="py-4 px-4 bg-gray-50">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div>
                                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Job Details</h4>
                                    <p className="text-sm text-gray-600 mb-1">
                                      <span className="font-medium">ID:</span> {offer.id}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                      <span className="font-medium">Location:</span> {offer.location}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      <span className="font-medium">Salary Range:</span> {offer.salary}
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Offer Timeline</h4>
                                    <p className="text-sm text-gray-600 mb-1">
                                      <span className="font-medium">Received:</span> {new Date(offer.date).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      <span className="font-medium">Status:</span> {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
                                    </p>
                                  </div>
                                  
                                  <div className="flex flex-col sm:flex-row md:flex-col items-start gap-2">
                                    <button
                                      type="button"
                                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-callx-blue hover:bg-callx-blue/90"
                                      aria-label="View offer letter"
                                    >
                                      <FileText size={16} className="mr-1.5" />
                                      View Offer Letter
                                    </button>
                                    
                                    <button
                                      type="button"
                                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                                      aria-label="Download offer as PDF"
                                    >
                                      <Download size={16} className="mr-1.5" />
                                      Download PDF
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {selectedTab === 'stats' && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Your Performance Stats</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-500 text-sm font-medium">Active Offers</h3>
                      <span className="bg-blue-100 text-blue-700 rounded-full p-2">
                        <Briefcase size={20} />
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{stats.activeOffers}</p>
                    <p className="text-sm text-gray-500 mt-2">Current pending offers</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-500 text-sm font-medium">Accepted Offers</h3>
                      <span className="bg-green-100 text-green-700 rounded-full p-2">
                        <CheckCircle size={20} />
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{stats.acceptedOffers}</p>
                    <p className="text-sm text-gray-500 mt-2">All-time accepted offers</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-500 text-sm font-medium">Offer Views</h3>
                      <span className="bg-purple-100 text-purple-700 rounded-full p-2">
                        <Users size={20} />
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{stats.offerViews}</p>
                    <p className="text-sm text-gray-500 mt-2">Total views on your profile</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-500 text-sm font-medium">Avg. Response Time</h3>
                      <span className="bg-amber-100 text-amber-700 rounded-full p-2">
                        <Clock size={20} />
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{stats.avgResponseTime}</p>
                    <p className="text-sm text-gray-500 mt-2">Average time to respond</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Activity History</h3>
                  <div className="text-center py-8 text-gray-500">
                    <BarChart size={48} className="mx-auto text-gray-300 mb-4" />
                    <p>Your detailed activity charts will appear here after more interactions.</p>
                  </div>
                </div>
              </div>
            )}
            
            {selectedTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Your Profile</h2>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="bg-callx-blue rounded-full w-24 h-24 flex items-center justify-center text-white text-3xl font-bold">
                      JD
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
                      <p className="text-gray-500">Customer Service Specialist</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-600 flex items-center">
                          <span className="w-20 text-gray-500">Email:</span> john.doe@example.com
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <span className="w-20 text-gray-500">Phone:</span> (555) 123-4567
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <span className="w-20 text-gray-500">Location:</span> San Francisco, CA
                        </p>
                      </div>
                    </div>
                    
                    <div className="sm:ml-auto mt-4 sm:mt-0">
                      <button className="bg-callx-blue text-white px-4 py-2 rounded-md hover:bg-callx-blue/90 transition">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Skills & Experience</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Top Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Customer Support</span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Call Center</span>
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Problem Solving</span>
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">CRM Systems</span>
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Bilingual</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Experience</h4>
                      <div className="space-y-3">
                        <div className="border-l-2 border-callx-blue pl-4 py-1">
                          <p className="text-gray-800 font-medium">Customer Service Rep</p>
                          <p className="text-gray-600 text-sm">Tech Solutions Inc. • 2020 - 2023</p>
                        </div>
                        <div className="border-l-2 border-gray-300 pl-4 py-1">
                          <p className="text-gray-800 font-medium">Call Center Agent</p>
                          <p className="text-gray-600 text-sm">Global Support Co. • 2018 - 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800 font-medium">Email Notifications</p>
                        <p className="text-gray-500 text-sm">Receive emails about new job offers</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-callx-blue"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800 font-medium">SMS Notifications</p>
                        <p className="text-gray-500 text-sm">Receive text messages about urgent offers</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-callx-blue"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800 font-medium">Job Preferences</p>
                        <p className="text-gray-500 text-sm">Show only remote job opportunities</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-callx-blue"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;