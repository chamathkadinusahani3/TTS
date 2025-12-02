import React from 'react';
import { motion } from 'framer-motion';
import { EventsSection } from '../components/EventsSection';
import { CalendarIcon, BellIcon, SparklesIcon } from 'lucide-react';
export function EventsPage() {
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80)',
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
            <SparklesIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">
              What's Happening
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
            Events &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}
              Promotions
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
        }} className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Discover exclusive deals, product launches, and educational
            workshops. Stay ahead with the latest from The Tyre Station.
          </motion.p>

          {/* Quick Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="flex flex-wrap justify-center gap-6">
            {[{
            icon: CalendarIcon,
            label: 'Upcoming Events',
            value: '6+'
          }, {
            icon: BellIcon,
            label: 'Active Promotions',
            value: '3'
          }, {
            icon: SparklesIcon,
            label: 'New Launches',
            value: '2'
          }].map((stat, index) => {
            const Icon = stat.icon;
            return <div key={index} className="flex items-center space-x-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-400/20">
                  <Icon className="w-5 h-5 text-yellow-400" />
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                </div>;
          })}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <EventsSection />

      {/* Newsletter Signup */}
      <section className="relative py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative p-12 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-xl border border-yellow-400/50 text-center overflow-hidden">
            <motion.div animate={{
            opacity: [0.3, 0.5, 0.3]
          }} transition={{
            duration: 4,
            repeat: Infinity
          }} className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10" />

            <div className="relative z-10">
              <BellIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-4">
                Never Miss an Event
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about
                exclusive promotions, product launches, and special events.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-white/40 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all" />
                <motion.button whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(255,215,0,0.6)'
              }} whileTap={{
                scale: 0.95
              }} className="px-8 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all whitespace-nowrap">
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
}