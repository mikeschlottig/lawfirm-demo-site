import { motion } from 'framer-motion';
import { Car, CheckCircle, Phone, ArrowRight, AlertTriangle, Truck, Shield, DollarSign } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function CarTruckAccidents() {
  return (
    <ServicePageLayout
      title="The Top Law Firm in the Rogue Valley for Representing Victims of Car and Truck Accidents"
      subtitle="Aggressive Advocacy for Accident Victims in Medford & Southern Oregon"
      description="When you've been injured in a car or truck accident on I-5, Highway 62, or any Southern Oregon roadway, you need attorneys who understand both the law and the local roads. Medford's Best Attorneys has recovered millions for accident victims throughout the Rogue Valley."
      icon={<Car className="w-8 h-8 text-gold-400" />}
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
                Rogue Valley Car Accident Attorneys Who Fight Back
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Southern Oregon's highways and roads see thousands of accidents every year. From multi-vehicle 
                collisions on I-5 to truck accidents on Highway 62, our Medford-based attorneys have handled 
                virtually every type of motor vehicle accident case.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We know how insurance companies try to minimize payouts. Our team builds bulletproof cases 
                with accident reconstruction experts, medical professionals, and economic analysts to ensure 
                you receive the full compensation you're entitled to under Oregon law.
              </p>
              <div className="flex flex-wrap gap-3">
                {['No Fee Unless We Win', 'Free Case Review', 'Immediate Investigation', 'Maximum Recovery'].map((item) => (
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
                { icon: <DollarSign className="w-6 h-6" />, value: '$35M+', label: 'Recovered for Victims' },
                { icon: <Car className="w-6 h-6" />, value: '1,500+', label: 'Accident Cases Won' },
                { icon: <Shield className="w-6 h-6" />, value: '99%', label: 'Settlement Success' },
                { icon: <Truck className="w-6 h-6" />, value: '24/7', label: 'Emergency Response' },
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

      {/* Types of Accidents */}
      <section className="py-24 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Types of Accident Cases We Handle
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our attorneys handle all types of motor vehicle accident cases throughout Southern Oregon.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Car Accidents', desc: 'Passenger vehicle collisions caused by distracted, impaired, or reckless drivers.' },
              { title: 'Truck Accidents', desc: 'Semi-truck and commercial vehicle accidents involving federal DOT regulations.' },
              { title: 'Motorcycle Accidents', desc: 'Cases involving motorcycle crashes where riders face serious injuries.' },
              { title: 'Pedestrian Accidents', desc: 'Hit-and-run and crosswalk accidents involving pedestrians and cyclists.' },
              { title: 'DUI/DWI Accidents', desc: 'Accidents caused by impaired drivers with enhanced penalties and damages.' },
              { title: 'Uninsured Motorist', desc: 'Claims against uninsured or underinsured drivers and your own policy.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-navy-700/30 rounded-xl border border-white/5 hover:border-gold-400/20 transition-colors"
              >
                <h3 className="font-playfair text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What To Do After Accident */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              What to Do After an Accident in Oregon
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These critical steps can protect your rights and strengthen your accident claim.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: '1', title: 'Seek Medical Attention', desc: 'Your health comes first. Even if you feel fine, get checked by a doctor — some injuries don\'t appear immediately.' },
              { step: '2', title: 'Document the Scene', desc: 'Take photos of vehicles, damage, road conditions, and any visible injuries. Get witness contact information.' },
              { step: '3', title: 'File a Police Report', desc: 'An official accident report is crucial evidence. Ensure the responding officer documents all details accurately.' },
              { step: '4', title: 'Don\'t Talk to Insurance', desc: 'Insurance adjusters may try to minimize your claim. Contact our attorneys before giving any statements.' },
              { step: '5', title: 'Preserve Evidence', desc: 'Keep all medical records, repair estimates, and correspondence related to your accident.' },
              { step: '6', title: 'Contact Our Firm', desc: 'Call Medford\'s Best Attorneys for a free case evaluation. We\'ll explain your rights and options clearly.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-navy-700/30 rounded-xl border border-white/5"
              >
                <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation Section */}
      <section className="py-24 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Compensation You May Be Entitled To
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Oregon law allows accident victims to recover various types of damages.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Medical Expenses', items: ['Hospital bills', 'Surgery costs', 'Physical therapy', 'Future medical care'] },
              { title: 'Lost Wages', items: ['Past lost income', 'Future earning capacity', 'Benefits lost', 'Career impact'] },
              { title: 'Pain & Suffering', items: ['Physical pain', 'Emotional distress', 'Loss of enjoyment', 'Disfigurement'] },
              { title: 'Property Damage', items: ['Vehicle repair', 'Vehicle replacement', 'Personal property', 'Rental car costs'] },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-navy-700/30 rounded-xl border border-white/5"
              >
                <h3 className="font-playfair text-lg font-bold text-gold-400 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((sub, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold-400/50 flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">Time is critical — Oregon has a 2-year statute of limitations</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
              Injured in a Car or Truck Accident?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Don't face the insurance companies alone. Our Medford accident attorneys will fight 
              for the maximum compensation you deserve. Call now for a free case review.
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
                to="/personal-injury"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-400/30 text-gold-400 font-semibold text-lg rounded-xl hover:bg-gold-400/10 transition-all duration-300"
              >
                Personal Injury <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
