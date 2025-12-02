import React from 'react';
import { motion } from 'framer-motion';
import { ServicesSection } from '../components/ServicesSection';
import { CheckCircleIcon } from 'lucide-react';
export function ServicesPage() {
  return <div className="min-h-screen bg-black pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div initial={{
          scale: 1.2,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 0.2
        }} transition={{
          duration: 1
        }} className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-yellow-400/30 mb-8">
            <span className="text-yellow-400 font-semibold text-sm">
              Expert Care
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            Professional
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}
              Services
            </span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="text-xl text-white/70 max-w-3xl mx-auto">
            Expert tyre and wheel services delivered with precision and care by
            our certified technicians.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Why Choose Us */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {' '}
                Us
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Certified technicians with years of experience', 'State-of-the-art equipment and technology', 'Quick turnaround times', 'Competitive pricing with no hidden fees', 'Quality guarantee on all services', 'Convenient location and hours'].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-400/20">
                <CheckCircleIcon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <p className="text-white/80 text-lg">{item}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
}