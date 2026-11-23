import { motion } from 'framer-motion';
import { Home as HomeIcon, CheckCircle, Phone, ArrowRight, Building, FileCheck, Key, MapPin } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function RealEstateLaw() {
  return (
    <ServicePageLayout
      title="Real Estate Law in Central Point, Oregon Is One of Our Law Firm's Specialties"
      subtitle="Protecting Your Property Rights Across the Rogue Valley"
      description="Whether you're buying your first home in Medford, developing commercial property in Central Point, or resolving a boundary dispute in the Rogue Valley, Medford's Best Attorneys delivers expert real estate legal services backed by decades of local experience."
      icon={<HomeIcon className="w-8 h-8 text-gold-400" />}
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
                Southern Oregon Real Estate Legal Experts
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The Rogue Valley real estate market is unique, and navigating property transactions 
                in Oregon requires attorneys who understand local regulations, zoning laws, and market dynamics. 
                Our firm has been helping clients in Medford, Central Point, Ashland, and surrounding communities 
                with all aspects of real estate law for over 25 years.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From residential closings to complex commercial transactions, land use disputes to title issues, 
                we provide comprehensive real estate legal services that protect your investment and ensure 
                smooth transactions.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Residential', 'Commercial', 'Land Use', 'Title Issues', 'Zoning'].map((item) => (
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
                { icon: <Building className="w-6 h-6" />, value: '3,000+', label: 'Transactions Closed' },
                { icon: <FileCheck className="w-6 h-6" />, value: '100%', label: 'Client Satisfaction' },
                { icon: <Key className="w-6 h-6" />, value: '25+', label: 'Years in Real Estate' },
                { icon: <MapPin className="w-6 h-6" />, value: '6', label: 'Counties Served' },
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

      {/* Services */}
      <section className="py-24 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Real Estate Law Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Full-service real estate legal representation for buyers, sellers, developers, and investors in Southern Oregon.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Residential Transactions', desc: 'Purchase and sale agreements, closings, and title review for home buyers and sellers.' },
              { title: 'Commercial Real Estate', desc: 'Lease negotiations, purchase agreements, and due diligence for commercial properties.' },
              { title: 'Land Use & Zoning', desc: 'Navigating local zoning regulations, variances, and land use permits in Jackson County.' },
              { title: 'Title Disputes', desc: 'Resolving boundary disputes, easement issues, and title defects.' },
              { title: 'Construction Law', desc: 'Contracts, liens, and dispute resolution for builders and property owners.' },
              { title: 'Landlord-Tenant Law', desc: 'Lease agreements, eviction proceedings, and tenant rights under Oregon law.' },
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

      {/* Areas We Serve */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Serving Communities Across the Rogue Valley
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our real estate attorneys serve clients throughout Southern Oregon's most dynamic property markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Medford', 'Central Point', 'Ashland', 'Jacksonville', 'Eagle Point', 'White City', 'Gold Hill', 'Talent'].map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-navy-700/30 rounded-xl border border-white/5"
              >
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
              Buying or Selling Property in Southern Oregon?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Protect your real estate investment with experienced legal counsel. 
              Contact our Central Point and Medford real estate attorneys today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5415551234"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-bold text-lg rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-400/20"
              >
                <Phone className="w-5 h-5" />
                Call (541) 555-1234
              </a>
              <Link
                to="/wills-trusts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-400/30 text-gold-400 font-semibold text-lg rounded-xl hover:bg-gold-400/10 transition-all duration-300"
              >
                Estate Planning <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
