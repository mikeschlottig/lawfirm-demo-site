import { Link } from 'react-router-dom';
import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Scale className="w-5 h-5 text-navy-900" />
              </div>
              <div>
                <div className="font-playfair text-lg font-bold text-white">Medford's Best</div>
                <div className="text-gold-400 text-xs tracking-[0.2em] uppercase">Attorneys</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Southern Oregon's most trusted law firm. Providing exceptional legal representation 
              in Medford, Central Point, and throughout the Rogue Valley for over 25 years.
            </p>
            <div className="flex gap-4">
              {['facebook', 'linkedin', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-400/10 hover:text-gold-400 transition-all duration-300">
                  <i className={`fab fa-${social} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-white mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              {[
                { name: 'Personal Injury', path: '/personal-injury' },
                { name: 'Probate Law', path: '/probate-law' },
                { name: 'Real Estate Law', path: '/real-estate-law' },
                { name: 'Car & Truck Accidents', path: '/car-truck-accidents' },
                { name: 'Wills & Trusts', path: '/wills-trusts' },
                { name: 'Divorce', path: '/divorces' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 text-sm hover:text-gold-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-400/50"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Case Results', 'Client Reviews', 'Blog', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:text-gold-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-400/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Main Street, Suite 400<br />Medford, Oregon 97501</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href="tel:5415551234" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">(541) 555-1234</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href="mailto:info@medfordsbestattorneys.com" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">info@medfordsbestattorneys.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: By Appointment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Medford's Best Attorneys. All rights reserved. | Attorney Advertising
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 text-xs hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-xs hover:text-gold-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 text-xs hover:text-gold-400 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
