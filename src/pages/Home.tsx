import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Scale, Heart, Home as HomeIcon, Car, FileText, Users, 
  ArrowRight, Star, Phone, Shield, Award, Clock,
  MapPin, CheckCircle, Quote
} from 'lucide-react';

const services = [
  {
    title: 'Personal Injury',
    description: 'Aggressive representation for injury victims across Southern Oregon.',
    icon: <Heart className="w-7 h-7" />,
    path: '/personal-injury',
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    title: 'Probate Law',
    description: 'Guiding families through estate administration with care and expertise.',
    icon: <FileText className="w-7 h-7" />,
    path: '/probate-law',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Real Estate Law',
    description: 'Comprehensive real estate legal services in the Rogue Valley.',
    icon: <HomeIcon className="w-7 h-7" />,
    path: '/real-estate-law',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Car & Truck Accidents',
    description: 'Fighting for maximum compensation for accident victims.',
    icon: <Car className="w-7 h-7" />,
    path: '/car-truck-accidents',
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    title: 'Wills & Trusts',
    description: 'Protect your legacy and secure your family\'s future.',
    icon: <FileText className="w-7 h-7" />,
    path: '/wills-trusts',
    color: 'from-purple-500/20 to-violet-500/20',
  },
  {
    title: 'Divorce',
    description: 'Compassionate guidance through life\'s most difficult transitions.',
    icon: <Users className="w-7 h-7" />,
    path: '/divorces',
    color: 'from-pink-500/20 to-rose-500/20',
  },
];

const testimonials = [
  {
    name: 'Michael R.',
    location: 'Medford, OR',
    text: 'After my accident on Highway 62, Medford\'s Best Attorneys fought tirelessly for my case. They secured a settlement that covered all my medical bills and more.',
    rating: 5,
  },
  {
    name: 'Sarah T.',
    location: 'Central Point, OR',
    text: 'Going through my divorce was the hardest time of my life. Their team handled everything with professionalism and genuine care for my family.',
    rating: 5,
  },
  {
    name: 'James & Linda K.',
    location: 'Ashland, OR',
    text: 'We needed help with our estate planning and wills. They made the entire process clear and stress-free. Highly recommend to anyone in the Rogue Valley.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(26,39,68,0.5) 0%, transparent 50%)
          `
        }} />
        
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-8">
                <Star className="w-4 h-4 text-gold-400" />
                <span className="text-gold-400 text-sm font-medium">Southern Oregon's #1 Rated Law Firm</span>
              </div>

              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Justice.{' '}
                <span className="text-gradient-gold">Integrity.</span>{' '}
                Results.
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-4 max-w-xl">
                For over 25 years, Medford's Best Attorneys has been the Rogue Valley's most trusted 
                law firm, delivering exceptional legal representation with unwavering dedication to our clients.
              </p>

              <p className="text-gray-400 mb-10 max-w-xl">
                Serving Medford, Central Point, Ashland, Jacksonville, and all of Southern Oregon 
                with expertise in Personal Injury, Family Law, Estate Planning, and more.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:5415551234"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-bold text-lg rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-400/20 hover:shadow-gold-400/40 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  (541) 555-1234
                </a>
                <Link
                  to="/personal-injury"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold text-lg rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  Our Practice Areas
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '5,000+', label: 'Cases Won' },
                  { number: '$50M+', label: 'Recovered' },
                  { number: '25+', label: 'Years' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-gold-400 font-playfair">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-navy-700/50 to-navy-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-10 shadow-2xl">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold-400/20 to-transparent rounded-full blur-xl" />
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-400/30">
                      <Scale className="w-7 h-7 text-navy-900" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-white">Why Choose Us</h3>
                      <p className="text-gold-400 text-sm">The Rogue Valley Difference</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {[
                      'No fees unless we win your case',
                      'Available 24/7 for emergencies',
                      'Free initial consultation',
                      'Bilingual legal team',
                      'Local expertise in Oregon law',
                      'Personalized case strategy',
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl p-5 shadow-xl shadow-gold-400/20"
                >
                  <div className="text-navy-900 text-center">
                    <div className="text-3xl font-bold font-playfair">A+</div>
                    <div className="text-xs font-semibold">BBB Rating</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-navy-900">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Our Practice Areas</span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Comprehensive Legal Services in{' '}
              <span className="text-gradient-gold">Southern Oregon</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From personal injury to estate planning, our experienced attorneys provide 
              dedicated representation across all major practice areas.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="premium-card group block h-full bg-gradient-to-br from-navy-700/30 to-navy-800/30 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-gold-400/20 p-8"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-navy-900" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212,175,55,0.2) 0%, transparent 70%)`
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Why Medford's Best</span>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
                The Rogue Valley's Most{' '}
                <span className="text-gradient-gold">Trusted</span> Legal Team
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our firm has been a cornerstone of the Medford legal community for over two decades. 
                We combine deep local knowledge with aggressive advocacy to deliver results that matter.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Shield className="w-6 h-6" />, title: 'Proven Track Record', desc: 'Over $50 million recovered for our clients' },
                  { icon: <Award className="w-6 h-6" />, title: 'Award-Winning', desc: 'Recognized by Oregon Super Lawyers annually' },
                  { icon: <Clock className="w-6 h-6" />, title: 'Always Available', desc: '24/7 emergency legal support' },
                  { icon: <MapPin className="w-6 h-6" />, title: 'Local Expertise', desc: 'Deep roots in the Rogue Valley community' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-navy-700/50 to-navy-800/50 backdrop-blur-sm rounded-3xl border border-white/10 p-10">
                <Quote className="w-12 h-12 text-gold-400/30 mb-6" />
                <p className="text-xl text-gray-200 font-cormorant leading-relaxed mb-8">
                  "Medford's Best Attorneys handled my personal injury case with incredible professionalism. 
                  They secured a settlement that exceeded my expectations. I couldn't have asked for better 
                  representation in Southern Oregon."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-bold">
                    DR
                  </div>
                  <div>
                    <div className="font-semibold text-white">David R.</div>
                    <div className="text-gray-400 text-sm">Personal Injury Client, Medford</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Client Testimonials</span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gradient-to-br from-navy-700/30 to-navy-800/30 rounded-2xl border border-white/5 p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-24 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Our Community</span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Proudly Serving the{' '}
              <span className="text-gradient-gold">Rogue Valley</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From Medford to Ashland, Central Point to Jacksonville — we're your neighbors, 
              and we're committed to serving our community with excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Medford', 'Central Point', 'Ashland', 'Jacksonville', 'Eagle Point', 'White City',
              'Gold Hill', 'Talent', 'Phoenix', 'Shady Cove', 'Grants Pass', 'Roseburg'
            ].map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 p-4 bg-navy-700/30 rounded-xl border border-white/5 hover:border-gold-400/20 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-gold-400/50 group-hover:text-gold-400 transition-colors flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Credentials */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Recognition</span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Awards & Accreditations
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Super Lawyers', subtitle: 'Oregon Rising Stars 2019-2024' },
              { title: 'AV Preeminent', subtitle: 'Martindale-Hubbell Rating' },
              { title: 'BBB A+ Rating', subtitle: 'Better Business Bureau' },
              { title: 'Top 100 Trial', subtitle: 'National Trial Lawyers' },
            ].map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-navy-700/30 to-navy-800/30 rounded-2xl border border-white/5 hover:border-gold-400/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-white mb-1">{award.title}</h3>
                <p className="text-gray-400 text-sm">{award.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)`
        }} />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Contact Medford's Best Attorneys today for a free, confidential consultation. 
              We're here to help you navigate your legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5415551234"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-bold text-xl rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-400/20 hover:shadow-gold-400/40"
              >
                <Phone className="w-6 h-6" />
                (541) 555-1234
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Available 24/7 • Free Consultation • No Fees Unless We Win
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
