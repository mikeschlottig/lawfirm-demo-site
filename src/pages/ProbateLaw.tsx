import { motion } from 'framer-motion';
import { FileText, CheckCircle, Phone, ArrowRight, Users, Scale, BookOpen, HandMetal } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function ProbateLaw() {
  return (
    <ServicePageLayout
      title="Expert Probate Law Attorneys Serving Families Throughout Southern Oregon"
      subtitle="Compassionate Guidance Through Estate Administration in the Rogue Valley"
      description="Navigating probate can be overwhelming during an already difficult time. Medford's Best Attorneys provides experienced, compassionate probate law services to help families in Medford, Central Point, and across Jackson County administer estates efficiently and with dignity."
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
                Trusted Probate Attorneys in Medford, Oregon
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                When a loved one passes away, the last thing you want to worry about is the complex legal 
                process of probate. Our Medford probate attorneys guide families through every step of estate 
                administration, from filing the initial petition to distributing assets to beneficiaries.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We understand Oregon probate law inside and out. Whether the estate is simple or complex, 
                contested or uncontested, our team handles the legal details so you can focus on what matters 
                most — your family.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Estate Administration', 'Will Contests', 'Trust Administration', 'Asset Protection'].map((item) => (
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
                { icon: <Users className="w-6 h-6" />, title: 'Family-Centered Approach', desc: 'We treat every family with the compassion and respect they deserve during difficult times.' },
                { icon: <Scale className="w-6 h-6" />, title: 'Oregon Law Experts', desc: 'Deep knowledge of Oregon probate codes, Jackson County court procedures, and local practices.' },
                { icon: <BookOpen className="w-6 h-6" />, title: 'Clear Communication', desc: 'We explain every step of the probate process in plain language you can understand.' },
                { icon: <HandMetal className="w-6 h-6" />, title: 'Efficient Resolution', desc: 'Our goal is to settle estates as quickly as possible while protecting all parties\' interests.' },
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
              Our Probate Law Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive probate and estate administration services for families across Southern Oregon.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Estate Administration', desc: 'Complete management of the probate process from petition to final distribution.' },
              { title: 'Will Contests & Disputes', desc: 'Representation in cases involving contested wills or questions about validity.' },
              { title: 'Trust Administration', desc: 'Guidance for trustees managing trust assets and beneficiary distributions.' },
              { title: 'Small Estate Affidavits', desc: 'Streamlined process for estates that qualify under Oregon\'s small estate laws.' },
              { title: 'Executor/Personal Representative', desc: 'Legal guidance for those appointed to administer a loved one\'s estate.' },
              { title: 'Creditor Claims', desc: 'Handling claims against estates and negotiating with creditors on behalf of beneficiaries.' },
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

      {/* Process */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              The Probate Process in Oregon
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Understanding the steps involved helps ease the uncertainty. Here's what to expect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'File Petition', desc: 'We file the necessary paperwork with the Jackson County Circuit Court to open probate.' },
              { step: '02', title: 'Notify Parties', desc: 'All heirs, beneficiaries, and creditors are formally notified as required by Oregon law.' },
              { step: '03', title: 'Inventory & Appraisal', desc: 'We identify, inventory, and obtain valuations for all estate assets.' },
              { step: '04', title: 'Distribution', desc: 'After debts and taxes are paid, remaining assets are distributed to beneficiaries.' },
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
              Need Help With Probate in Southern Oregon?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let our experienced probate attorneys guide you through this process. 
              Schedule a free consultation today.
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
                Wills & Trusts <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
