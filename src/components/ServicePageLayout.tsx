import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Shield, Award, Clock, Users } from 'lucide-react';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  children: ReactNode;
  icon: ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  children,
  icon,
  gradientFrom = 'from-navy-800',
  gradientTo = 'to-navy-900',
}: ServicePageLayoutProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] flex items-center bg-gradient-to-b ${gradientFrom} ${gradientTo} overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212,175,55,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(212,175,55,0.05) 0%, transparent 50%)`
          }} />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-400/3 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <Link to="/" className="inline-flex items-center gap-2 text-gold-400/80 hover:text-gold-400 text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-400/20 flex items-center justify-center mb-8">
              {icon}
            </div>

            {/* Title */}
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-cormorant text-gold-400 font-medium mb-6">
              {subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
              {description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:5415551234"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-bold text-lg rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-400/20 hover:shadow-gold-400/40"
              >
                <Phone className="w-5 h-5" />
                Free Consultation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-400/30 text-gold-400 font-semibold text-lg rounded-xl hover:bg-gold-400/10 hover:border-gold-400/50 transition-all duration-300"
              >
                Schedule a Meeting
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-800/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-6 h-6" />, label: '25+ Years Experience' },
              { icon: <Award className="w-6 h-6" />, label: 'Top Rated in Oregon' },
              { icon: <Clock className="w-6 h-6" />, label: '24/7 Availability' },
              { icon: <Users className="w-6 h-6" />, label: '5,000+ Clients Served' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-center md:text-left"
              >
                <div className="text-gold-400">{item.icon}</div>
                <span className="text-sm font-medium text-gray-300">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      {children}
    </div>
  );
}
