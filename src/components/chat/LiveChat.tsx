
import { useState, useEffect, useRef } from 'react';
import { Send, X, Maximize2, Minimize2, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const aiResponses = [
  "Thanks for reaching out! How can I help you with your customer service career today?",
  "That's a great question about our QR job offers. They're secure digital offers that expire after 24 hours for security.",
  "The salary range for that position is typically $45,000-$55,000 depending on experience.",
  "Our benefits package includes health insurance, 401k matching, and paid training as standard.",
  "Call X Trade specializes in connecting skilled customer service agents with top companies.",
  "The application process is simple: scan the QR code, review the offer, and accept if interested.",
  "Yes, remote work options are available for many positions.",
  "Training is provided for all new hires, regardless of experience level.",
  "Most positions require at least 2 years of customer service experience.",
  "We have offices in San Francisco, Chicago, and Austin currently."
];

const getRandomResponse = (): string => {
  const randomIndex = Math.floor(Math.random() * aiResponses.length);
  return aiResponses[randomIndex];
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! Welcome to Call X Trade's live chat support. How can I assist you today?",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    
    // Simulate agent typing
    setIsTyping(true);
    
    // Add agent response after a delay
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getRandomResponse(),
        sender: 'agent',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const closeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-callx-blue text-white p-4 rounded-full shadow-lg hover:bg-callx-blue/90 transition-all z-40 animate-bounce"
          aria-label="Open live chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
      
      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed ${isMinimized ? 'bottom-6 right-6 w-auto h-auto' : 'bottom-6 right-6 w-80 sm:w-96 h-[450px]'} 
            bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-40 border border-gray-200 transition-all`}
        >
          {/* Chat Header */}
          <div 
            className="bg-callx-blue text-white p-3 flex justify-between items-center cursor-pointer"
            onClick={toggleMinimize}
          >
            <div className="flex items-center">
              <div className="bg-callx-gold rounded-full w-8 h-8 flex items-center justify-center mr-2">
                <span className="text-callx-blue font-bold text-sm">CX</span>
              </div>
              <h3 className="font-medium">Call X Trade Support</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleMinimize} 
                className="text-white hover:text-callx-gold transition p-1"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button 
                onClick={closeChat} 
                className="text-white hover:text-callx-gold transition p-1"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 shadow-sm ${
                          msg.sender === 'user' 
                            ? 'bg-callx-blue text-white rounded-tr-none' 
                            : 'bg-white border border-gray-200 rounded-tl-none'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <span 
                          className={`text-xs mt-1 block ${
                            msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="flex items-center">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-callx-blue resize-none h-10"
                    rows={1}
                    aria-label="Type your message"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={message.trim() === ''}
                    className={`ml-2 p-2 rounded-full ${
                      message.trim() === '' 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-callx-blue text-white hover:bg-callx-blue/90'
                    } transition`}
                    aria-label="Send message"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default LiveChat;