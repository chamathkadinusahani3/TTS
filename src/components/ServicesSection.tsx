import React from 'react';
import { motion } from 'framer-motion';
import { AlignCenterIcon, ScaleIcon, WrenchIcon, AlertCircleIcon } from 'lucide-react';
const services = [{
  icon: AlignCenterIcon,
  title: 'Wheel Alignment',
  description: 'Precision alignment for optimal handling and tyre longevity'
}, {
  icon: ScaleIcon,
  title: 'Wheel Balancing',
  description: 'Perfect balance for smooth rides and extended tyre life'
}, {
  icon: WrenchIcon,
  title: 'Tyre Change',
  description: 'Expert installation with professional care and attention'
}, {
  icon: AlertCircleIcon,
  title: 'Puncture Repair',
  description: 'Fast, reliable fixes to get you back on the road'
}];
export function ServicesSection() {
  return <section id="services" className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div animate={{
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 6,
        repeat: Infinity
      }} className="absolute top-1/3 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
        <motion.div animate={{
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        delay: 3
      }} className="absolute bottom-1/3 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Professional
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}
              Services
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Expert care for your tyres and wheels
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <motion.div key={service.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            y: -8
          }} className="group relative">
                <motion.div whileHover={{
              scale: 1.02
            }} className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all h-full">
                  {/* Glow Effect */}
                  <motion.div initial={{
                opacity: 0
              }} whileHover={{
                opacity: 0.3
              }} className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl" />

                  {/* Icon */}
                  <motion.div whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.6
              }} className="relative mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.5)] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.8)] transition-all">
                    <Icon className="w-8 h-8 text-black" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.8)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}