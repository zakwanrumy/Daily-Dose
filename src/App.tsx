import React, { useState, useEffect } from 'react';
import { Quote, Droplets, Wind, Wallet as Walk, Heart, Mail, Instagram, Twitter, Moon, Sun, Music2, BookOpen, Coffee, Sparkles } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [journalEntry, setJournalEntry] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quotes = [
    "Take a deep breath. You're exactly where you're meant to be.",
    "Every moment is a fresh beginning.",
    "Peace begins with a smile.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] scroll-smooth">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-serif text-white animate-float">Daily Dose</h1>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8 text-gray-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#practices" className="hover:text-white transition-colors">Practices</a>
              <a href="#inspiration" className="hover:text-white transition-colors">Inspiration</a>
              <a href="#journal" className="hover:text-white transition-colors">Journal</a>
              <a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#practices" className="block px-3 py-2 text-gray-400 hover:text-white transition-colors">Practices</a>
              <a href="#inspiration" className="block px-3 py-2 text-gray-400 hover:text-white transition-colors">Inspiration</a>
              <a href="#journal" className="block px-3 py-2 text-gray-400 hover:text-white transition-colors">Journal</a>
              <a href="#newsletter" className="block px-3 py-2 text-gray-400 hover:text-white transition-colors">Newsletter</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        id="home"
        className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative flex items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.9)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 sm:p-12 animate-fade-in">
            <Quote className="w-12 h-12 text-[#A7C4BC] mb-6 animate-float" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-relaxed mb-6 transition-opacity duration-500">
              {quotes[currentQuote]}
            </h2>
            <button className="bg-[#FF9A8B] text-white px-6 sm:px-8 py-3 rounded-full hover:bg-[#FF9A8B]/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#FF9A8B]/20">
              Begin Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1E2B3A] to-[#2A3B4D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">Daily Wellness Rituals</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Discover simple practices that can transform your daily routine into moments of mindfulness and joy.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Coffee className="w-8 h-8" />, title: "Morning Ritual", text: "Start your day with intention" },
              { icon: <Music2 className="w-8 h-8" />, title: "Sound Healing", text: "Harmonize your energy" },
              { icon: <BookOpen className="w-8 h-8" />, title: "Mindful Reading", text: "Nourish your mind" },
              { icon: <Sparkles className="w-8 h-8" />, title: "Evening Reflection", text: "Close your day with gratitude" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-[#2E4055] p-6 rounded-xl border border-[#4A5C6B]/30 hover:border-[#4A5C6B] transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay-${index + 1}`}
              >
                <div className="text-[#A7C4BC] mb-4">{item.icon}</div>
                <h3 className="text-white text-xl mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Tips */}
      <section id="practices" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2C1810] to-[#3D261C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">Today's Practices</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Simple steps towards a more mindful day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#4D3428] p-8 rounded-xl border border-[#6B4A3C]/30 hover:border-[#6B4A3C] transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay-1">
              <Droplets className="w-8 h-8 text-[#A7C4BC] mb-4 animate-float" />
              <h3 className="text-white text-xl mb-2">Hydration Ritual</h3>
              <p className="text-gray-200">Drink a glass of water before checking your phone. Let this simple act ground you in the present moment.</p>
            </div>
            <div className="bg-[#4D3428] p-8 rounded-xl border border-[#6B4A3C]/30 hover:border-[#6B4A3C] transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay-2">
              <Wind className="w-8 h-8 text-[#A7C4BC] mb-4 animate-float" />
              <h3 className="text-white text-xl mb-2">Box Breathing</h3>
              <p className="text-gray-200">Breathe in for 4 seconds, hold for 4, out for 4, hold for 4. Repeat this cycle to find your center.</p>
            </div>
            <div className="bg-[#4D3428] p-8 rounded-xl border border-[#6B4A3C]/30 hover:border-[#6B4A3C] transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay-3">
              <Walk className="w-8 h-8 text-[#A7C4BC] mb-4 animate-float" />
              <h3 className="text-white text-xl mb-2">Mindful Movement</h3>
              <p className="text-gray-200">Take a 5-minute walk outside today. Notice the sensations, sounds, and sights around you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Inspiration */}
      <section id="inspiration" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A2F38] to-[#2B4046]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">Moments of Peace</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Find inspiration in these tranquil scenes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80', text: "Embrace the silence" },
              { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80', text: "Growth takes time" },
              { url: 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=600&q=80', text: "Find your peace" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`relative group overflow-hidden rounded-xl border border-[#4A6B73]/30 hover:border-[#4A6B73] animate-fade-in-delay-${index + 1}`}
              >
                <img 
                  src={item.url} 
                  alt="Inspiration" 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#1A2F38]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                  <p className="text-white text-2xl font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Journal */}
      <section id="journal" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2D1F2F] to-[#3E2F40]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">Daily Reflection</h2>
            <p className="text-gray-300">Take a moment to pause and reflect on the small joys of today.</p>
          </div>
          <div className="bg-[#4D3F4F] p-8 rounded-xl border border-[#6B5A6D]/30 hover:border-[#6B5A6D] animate-fade-in-delay-1">
            <h3 className="text-2xl font-serif text-white mb-6 text-center">What's something small you're grateful for today?</h3>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#5D4F5F] border border-[#6B5A6D]/30 focus:outline-none focus:ring-2 focus:ring-[#A7C4BC] resize-none text-gray-200 placeholder-gray-400 transition-all duration-300"
              rows={4}
              placeholder="Write your thoughts here..."
            />
            <div className="text-center mt-6">
              <button className="bg-[#A7C4BC] text-white px-8 py-3 rounded-full hover:bg-[#A7C4BC]/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#A7C4BC]/20">
                Save privately
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2A1D29] to-[#1E151D]">
        <div className="max-w-xl mx-auto">
          <div className="text-center animate-fade-in">
            <Heart className="w-12 h-12 text-[#FF9A8B] mx-auto mb-6 animate-float" />
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">Stay Connected</h2>
            <p className="text-gray-300 mb-8">Get a gentle reminder to breathe, once a week.</p>
          </div>
          <div className="space-y-4 animate-fade-in-delay-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full p-4 rounded-full bg-[#3A2D39] border border-[#6B5A6D]/30 focus:outline-none focus:ring-2 focus:ring-[#A7C4BC] text-gray-200 placeholder-gray-400 transition-all duration-300"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full p-4 rounded-full bg-[#3A2D39] border border-[#6B5A6D]/30 focus:outline-none focus:ring-2 focus:ring-[#A7C4BC] text-gray-200 placeholder-gray-400 transition-all duration-300"
            />
            <button className="w-full bg-[#FF9A8B] text-white px-8 py-4 rounded-full hover:bg-[#FF9A8B]/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#FF9A8B]/20">
              Subscribe to Daily Dose
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#121212] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-serif text-lg mb-4">Daily Dose</h3>
              <p className="text-gray-400">Your daily companion for mindfulness and well-being.</p>
            </div>
            <div>
              <h4 className="text-white font-serif text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#practices" className="text-gray-400 hover:text-white transition-colors">Practices</a></li>
                <li><a href="#inspiration" className="text-gray-400 hover:text-white transition-colors">Inspiration</a></li>
                <li><a href="#journal" className="text-gray-400 hover:text-white transition-colors">Journal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-serif text-lg mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-serif text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left">© 2025 Daily Dose · All Rights Reserved</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;