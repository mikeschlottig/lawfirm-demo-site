import { motion } from 'framer-motion';
import { Heart, CheckCircle, Phone, ArrowRight, Gavel, Shield, Clock, DollarSign } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function PersonalInjury() {
  return (
    <ServicePageLayout
      title="The Highest Quality Personal Injury Lawsuit Representation Available in Southern Oregon"
      subtitle="Medford's Best Attorneys — Your Trusted Advocates for Injury Claims"
      description="When you've been injured due to someone else's negligence, you need a law firm that will fight relentlessly for the compensation you deserve. Our Medford-based personal injury attorneys have recovered over $50 million for injury victims across Southern Oregon and the Rogue Valley."
      icon={<Heart className="w-8 h-8 text-gold-400" />}
    >
      {/* About Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
                Southern Oregon's Leading Personal Injury Law Firm
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Medford's Best Attorneys, we understand that a personal injury can change your life in an instant. 
                Whether you've been hurt in a car accident on I-5, slipped at a local business, or suffered medical malpractice, 
                our experienced team is ready to hold the responsible parties accountable.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our attorneys have deep knowledge of Oregon personal injury law and a proven track record of securing 
                maximum compensation for clients in Medford, Central Point, Ashland, Jacksonville, and throughout 
                Jackson County and Josephine County.
              </p>
              <div className="flex flex-wrap gap-3">
                {['No Win, No Fee', 'Free Consultation', '24/7 Availability', 'Bilingual Staff'].map((item) => (
                  <span key={item} className="px-4 py-2 bg-gold-400/10 border border-gold-400/20 rounded-full text-gold-400 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <DollarSign className="w-6 h-6" />, value: '$50M+', label: 'Recovered for Clients' },
                { icon: <Gavel className="w-6 h-6" />, value: '2,500+', label: 'Cases Handled' },
                { icon: <Shield className="w-6 h-6" />, value: '98%', label: 'Success Rate' },
                { icon: <Clock className="w-6 h-6" />, value: '25+', label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-navy-700/50 to-navy-800/50 rounded-2xl border border-white/5 p-6 text-center">
                  <div className="text-gold-400 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white font-playfair">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Cases */}
      <section className="py-24 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Types of Personal Injury Cases We Handle
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our Medford personal injury attorneys handle all types of injury claims throughout Southern Oregon.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Car & Truck Accidents',
              'Slip and Fall Injuries',
              'Medical Malpractice',
              'Workplace Injuries',
              'Product Liability',
              'Wrongful Death',
              'Dog Bite Injuries',
              'Premises Liability',
              'Nursing Home Abuse',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-navy-700/30 rounded-xl border border-white/5 hover:border-gold-400/20 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Proven Personal Injury Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We've refined our approach over 25 years to maximize results for injury victims in the Rogue Valley.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Free Consultation', desc: 'We evaluate your case at no cost and explain your legal options clearly.' },
              { step: '02', title: 'Investigation', desc: 'Our team gathers evidence, interviews witnesses, and builds a strong case.' },
              { step: '03', title: 'Negotiation', desc: 'We aggressively negotiate with insurance companies for maximum compensation.' },
              { step: '04', title: 'Resolution', desc: 'Whether through settlement or trial, we fight until you receive what you deserve.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="text-5xl font-playfair font-bold text-gold-400/20 mb-4">{item.step}</div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
              Injured in Southern Oregon? We Can Help.
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Don't wait — Oregon's statute of limitations may limit your time to file a claim. 
              Contact our Medford personal injury attorneys today for a free case evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5415551234"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-bold text-lg rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-400/20"
              >
                <Phone className="w-5 h-5" />
                Call (541) 555-1234 Now
              </a>
              <Link
                to="/car-truck-accidents"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-400/30 text-gold-400 font-semibold text-lg rounded-xl hover:bg-gold-400/10 transition-all duration-300"
              >
                Car Accident Cases <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
