import { motion } from 'framer-motion';
import { Users, CheckCircle, Phone, ArrowRight, Heart, Shield, Scale, Briefcase } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function Divorces() {
  return (
    <ServicePageLayout
      title="Where to Hire the Best Divorce Attorney in Southern Oregon"
      subtitle="Compassionate, Strategic Divorce Representation in Medford & the Rogue Valley"
      description="Divorce is one of life's most challenging transitions. Medford's Best Attorneys provides strategic, compassionate divorce representation that protects your rights, your children, and your financial future. Our family law attorneys serve clients throughout Southern Oregon with discretion and dedication."
      icon={<Users className="w-8 h-8 text-gold-400" />}
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
                Southern Oregon's Most Respected Family Law Attorneys
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                When your marriage is ending, you need more than just a lawyer — you need an advocate 
                who understands both the legal complexities and the emotional weight of divorce. Our 
                Medford family law team combines aggressive courtroom skills with genuine compassion 
                to guide you through every step of the process.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether your divorce is amicable or contested, involving complex assets or straightforward 
                division, we develop strategies tailored to your unique situation. We serve clients in 
                Medford, Central Point, Ashland, and throughout Jackson and Josephine Counties.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Contested Divorce', 'Uncontested Divorce', 'Child Custody', 'Spousal Support', 'Asset Division'].map((item) => (
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
                { icon: <Users className="w-6 h-6" />, value: '2,000+', label: 'Divorces Handled' },
                { icon: <Heart className="w-6 h-6" />, value: '95%', label: 'Client Satisfaction' },
                { icon: <Scale className="w-6 h-6" />, value: '25+', label: 'Years in Family Law' },
                { icon: <Briefcase className="w-6 h-6" />, value: '100%', label: 'Confidential' },
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
              Our Family Law & Divorce Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive family law services for every stage of the divorce process.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Contested Divorce', desc: 'Aggressive representation when you and your spouse cannot agree on key terms.' },
              { title: 'Uncontested Divorce', desc: 'Efficient, cost-effective processing when both parties agree on major issues.' },
              { title: 'Child Custody & Parenting Time', desc: 'Protecting your relationship with your children through custody and visitation plans.' },
              { title: 'Child Support', desc: 'Ensuring fair child support calculations under Oregon guidelines.' },
              { title: 'Spousal Support (Alimony)', desc: 'Advocating for appropriate spousal support based on income, duration, and need.' },
              { title: 'Property & Debt Division', desc: 'Equitable distribution of assets including homes, retirement accounts, and businesses.' },
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

      {/* Oregon Divorce Process */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Understanding Divorce in Oregon
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Oregon is a no-fault divorce state. Here's what the process looks like.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-playfair text-2xl font-bold text-white">The Oregon Divorce Process</h3>
              {[
                { step: '1', title: 'Filing the Petition', desc: 'One spouse files a petition for dissolution of marriage in Oregon circuit court.' },
                { step: '2', title: 'Serving Your Spouse', desc: 'The petition must be formally served to the other spouse, who has 30 days to respond.' },
                { step: '3', title: 'Discovery & Negotiation', desc: 'Both sides exchange financial information and attempt to reach agreements.' },
                { step: '4', title: 'Mediation (If Needed)', desc: 'Oregon courts often require mediation before trial for contested issues.' },
                { step: '5', title: 'Trial or Settlement', desc: 'If no agreement is reached, a judge decides the contested issues at trial.' },
                { step: '6', title: 'Final Judgment', desc: 'The court issues a final judgment incorporating all agreements or rulings.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-playfair text-2xl font-bold text-white">Why Choose Our Divorce Attorneys</h3>
              {[
                { icon: <Shield className="w-6 h-6" />, title: 'Discretion & Privacy', desc: 'Your personal matters are handled with the utmost confidentiality.' },
                { icon: <Scale className="w-6 h-6" />, title: 'Courtroom Experience', desc: 'Decades of litigation experience in Jackson County family court.' },
                { icon: <Heart className="w-6 h-6" />, title: 'Child-Focused', desc: 'We prioritize the well-being of children in all custody matters.' },
                { icon: <Briefcase className="w-6 h-6" />, title: 'Financial Expertise', desc: 'Complex asset division including businesses, retirement, and real estate.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-navy-700/30 rounded-xl border border-white/5">
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

      {/* Important Info */}
      <section className="py-24 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-navy-700/50 to-navy-800/50 rounded-3xl border border-gold-400/10 p-10 md:p-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
                  Important Oregon Divorce Facts
                </h2>
                <ul className="space-y-4">
                  {[
                    'Oregon requires a 6-month residency before filing for divorce',
                    'Oregon is a "no-fault" state — you don\'t need to prove wrongdoing',
                    'Property is divided equitably (fairly), not necessarily equally',
                    'Child custody decisions are based on the child\'s best interests',
                    'Mediation is often required before a divorce goes to trial',
                    'Both parents have a legal obligation to support their children',
                  ].map((fact, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                  Take the First Step Today
                </h3>
                <p className="text-gray-400 mb-8">
                  Every divorce is unique. Let us help you understand your rights and options 
                  in a confidential, no-pressure consultation.
                </p>
                <a
                  href="tel:5415551234"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-bold text-lg rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-400/20"
                >
                  <Phone className="w-5 h-5" />
                  Call (541) 555-1234
                </a>
              </div>
            </div>
          </motion.div>
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
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Move Forward With Confidence?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Our Medford divorce attorneys are here to help you navigate this transition 
              with strength and dignity. Schedule your confidential consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5415551234"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-bold text-lg rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-400/20"
              >
                <Phone className="w-5 h-5" />
                Free Confidential Consultation
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
