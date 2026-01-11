
import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Mail, Facebook, Instagram } from 'lucide-react';

const CEO_MESSAGES = [
  "Fashion is the armor to survive the reality of everyday life. Welcome to Pari Posh.",
  "We don't just design clothes; we design dreams. Thank you for choosing us.",
  "Elegance is not standing out, but being remembered. Enjoy your shopping experience.",
  "Tradition meets modernity in every stitch we sew. Welcome to the family.",
  "Style is a way to say who you are without having to speak.",
  "Quality is not an act, it is a habit. We promise you the best."
];

const CEO_IMAGE = "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/480096217_122098691768772817_5002006631407603851_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0wKAytSaz3gQ7kNvwE1JmvU&_nc_oc=AdnQ5c3JqW2hAc0u3fIBOZwH0JhPMHrzQlFQOP3MeAYgFmZCXd6YZooHyVn84op_AqU&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=7zR6OvYUirWJxE7n7iwkoQ&oh=00_Afpt8ZrstJJ_jCFR8hYw3RfxLj_uVllwsqFRq61m5osL-Q&oe=69692035";

const PromotionalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Pick random message
    setMessage(CEO_MESSAGES[Math.floor(Math.random() * CEO_MESSAGES.length)]);
    
    // Open after delay
    const timer = setTimeout(() => {
        // Check if already shown in this session
        const hasShown = sessionStorage.getItem('promoShown');
        if (!hasShown) {
            setIsOpen(true);
            sessionStorage.setItem('promoShown', 'true');
        }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in-down" onClick={() => setIsOpen(false)} />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade-in-up transform transition-all scale-100">
        
        {/* Decorative Header */}
        <div className="h-28 bg-primary relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-gray-900 to-black"></div>
             <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 p-1 rounded-full text-white transition-colors z-10"
            >
                <X className="h-5 w-5" />
            </button>
        </div>

        {/* CEO Image & Brand */}
        <div className="relative -mt-14 flex flex-col items-center px-6">
            <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                <img src={CEO_IMAGE} alt="Muhammad Behzad Faisal" className="w-full h-full object-cover" />
            </div>
            
            <div className="mt-3 text-center">
                 <h2 className="font-serif text-xl font-bold text-primary tracking-widest">PARI POSH</h2>
                 <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Premium Eastern Wear</p>
            </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-8 pt-4 text-center">
            <div className="mb-6 relative">
                <span className="absolute -top-4 left-0 text-4xl text-gray-200 font-serif">"</span>
                <p className="text-gray-600 italic font-serif text-sm leading-relaxed px-4">
                    {message}
                </p>
                <span className="absolute -bottom-4 right-0 text-4xl text-gray-200 font-serif leading-3">"</span>
                
                <div className="mt-3">
                    <p className="text-sm font-bold text-primary">Muhammad Behzad Faisal</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Founder & CEO</p>
                </div>
            </div>

            <div className="space-y-3">
                <a 
                    href="https://wa.me/923275247247" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-md group"
                >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Chat on WhatsApp
                </a>
                
                <div className="pt-4 border-t border-gray-100 flex flex-col items-center gap-3">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Connect With Us</p>
                    <div className="flex justify-center gap-4">
                        <a href="mailto:mbfaisal247@gmail.com" className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-200 transition-colors" title="Email">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-[#1877F2] hover:text-white transition-colors" title="Facebook">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-[#E4405F] hover:text-white transition-colors" title="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalModal;
