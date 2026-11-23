import { motion } from 'framer-motion';
import { FileText, CheckCircle, Phone, ArrowRight, Shield, Lock, Heart, Users } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function WillsTrusts() {
  return (
    <ServicePageLayout
      title="Protect Your Family's Future With Expert Wills and Trusts Attorneys in Medford, Oregon"
      subtitle="Comprehensive Estate Planning for Southern Oregon Families"
      description="Your legacy deserves protection. Medford's Best Attorneys crafts personalized wills and trusts that safeguard your assets, provide for your loved ones, and ensure your wishes are carried out exactly as you intend — serving families throughout the Rogue Valley."
      icon={<FileText className="w-8 h-8 text-gold-400" />}
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
                Estate Planning Attorneys You Can Trust
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Estate planning isn't just for the wealthy — it's for anyone who wants to protect 
                their family's future. Our Medford estate planning attorneys work with families at 
                every stage of life to create comprehensive wills, trusts, and estate plans that 
                reflect your values and goals.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you need a simple will, a revocable living trust, or a complex estate plan 
                involving business succession and charitable giving, our team provides personalized 
                guidance rooted in Oregon law and decades of local experience.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Wills', 'Revocable Trusts', 'Irrevocable Trusts', 'Power of Attorney', 'Healthcare Directives'].map((item) => (
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
              className="space-y-6"
            >
              {[
                { icon: <Shield className="w-6 h-6" />, title: 'Asset Protection', desc: 'Shield your wealth from creditors, lawsuits, and unnecessary taxation.' },
                { icon: <Heart className="w-6 h-6" />, title: 'Family Security', desc: 'Ensure your children and loved ones are provided for according to your wishes.' },
                { icon: <Lock className="w-6 h-6" />, title: 'Privacy', desc: 'Trusts allow your estate to pass without public probate proceedings.' },
                { icon: <Users className="w-6 h-6" />, title: 'Legacy Planning', desc: 'Create a lasting impact through charitable giving and family foundations.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gradient-to-br from-navy-700/30 to-navy-800/30 rounded-xl border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
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
              Our Wills & Trusts Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive estate planning solutions tailored to your unique family situation and goals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Last Will & Testament', desc: 'Clearly define how your assets should be distributed and who should care for minor children.' },
              { title: 'Revocable Living Trusts', desc: 'Avoid probate, maintain privacy, and retain control of your assets during your lifetime.' },
              { title: 'Irrevocable Trusts', desc: 'Advanced asset protection and tax planning strategies for high-net-worth individuals.' },
              { title: 'Power of Attorney', desc: 'Designate trusted individuals to manage your financial and legal affairs if you become incapacitated.' },
              { title: 'Healthcare Directives', desc: 'Express your medical wishes and appoint someone to make healthcare decisions on your behalf.' },
              { title: 'Beneficiary Designations', desc: 'Ensure retirement accounts, life insurance, and other assets pass directly to intended recipients.' },
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

      {/* Why Plan Now */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Estate Planning Matters for Oregon Families
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Without a proper estate plan, Oregon's intestacy laws decide who gets your assets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Without a Will', items: ['Oregon courts decide asset distribution', 'Family may face lengthy probate', 'Guardians for children chosen by court', 'Higher legal costs for your family', 'Assets may go to unintended recipients'] },
              { title: 'With Our Planning', items: ['You control who inherits your assets', 'Probate can be avoided entirely', 'You choose guardians for children', 'Lower costs and faster distribution', 'Tax-efficient wealth transfer'] },
              { title: 'Peace of Mind', items: ['Your wishes are legally documented', 'Family conflicts are minimized', 'Business succession is planned', 'Charitable goals are achieved', 'Regular plan reviews keep things current'] },
            ].map((column, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`p-8 rounded-2xl border ${i === 1 ? 'bg-gradient-to-br from-gold-400/10 to-gold-600/5 border-gold-400/20' : 'bg-navy-700/30 border-white/5'}`}
              >
                <h3 className={`font-playfair text-xl font-bold mb-6 ${i === 1 ? 'text-gold-400' : 'text-white'}`}>
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${i === 1 ? 'text-gold-400' : 'text-gray-500'}`} />
                      <span className={`text-sm ${i === 1 ? 'text-gray-200' : 'text-gray-400'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
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
              Ready to Protect Your Family's Future?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Don't leave your family's future to chance. Schedule a free consultation with our 
              estate planning attorneys and create a plan that gives you peace of mind.
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
                to="/probate-law"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-400/30 text-gold-400 font-semibold text-lg rounded-xl hover:bg-gold-400/10 transition-all duration-300"
              >
                Probate Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
